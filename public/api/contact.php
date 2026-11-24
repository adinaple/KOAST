<?php
/**
 * KOAST — réception du formulaire « Demander un diagnostic ».
 * Exécuté par l'hébergement Hostinger (PHP). Le fichier finit dans public_html/api/contact.php.
 *
 * À configurer :
 *  - $DESTINATAIRE : la boîte qui reçoit les demandes ;
 *  - $EXPEDITEUR   : une adresse DE VOTRE DOMAINE créée dans hPanel > Emails
 *                    (sinon les messages risquent de finir en spam).
 */

$DESTINATAIRE = 'contact@VOTRE-DOMAINE';
$EXPEDITEUR   = 'site@VOTRE-DOMAINE';

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

function repondre(int $code, array $data): void {
    http_response_code($code);
    echo json_encode($data);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    repondre(405, ['ok' => false, 'erreur' => 'Méthode non autorisée']);
}

// Champ piège : rempli uniquement par les robots → on fait semblant d'accepter
if (!empty($_POST['site_web'])) {
    repondre(200, ['ok' => true]);
}

// Nettoyage : une ligne, longueur limitée, pas de retour chariot (anti-injection d'en-têtes)
function champ(string $nom, int $max = 200): string {
    $v = trim((string)($_POST[$nom] ?? ''));
    $v = str_replace(["\r", "\n", "\0"], ' ', $v);
    return mb_substr($v, 0, $max);
}

$prenom     = champ('prenom', 80);
$nom        = champ('nom', 80);
$entreprise = champ('entreprise', 120);
$taille     = champ('taille', 80);
$email      = filter_var(champ('email', 160), FILTER_VALIDATE_EMAIL);
$telephone  = champ('telephone', 40);
$besoin     = champ('besoin', 120);
$message    = mb_substr(trim(str_replace("\0", '', (string)($_POST['message'] ?? ''))), 0, 5000);
$consent    = ($_POST['consentement'] ?? '') === 'oui';

if ($prenom === '' || $nom === '' || $entreprise === '' || !$email || $telephone === '' || !$consent) {
    repondre(422, ['ok' => false, 'erreur' => 'Champs obligatoires manquants']);
}

// Limite simple : une demande toutes les 30 secondes par adresse IP
$ip = $_SERVER['REMOTE_ADDR'] ?? 'inconnue';
$verrou = sys_get_temp_dir() . '/koast_form_' . md5($ip);
if (is_file($verrou) && (time() - filemtime($verrou)) < 30) {
    repondre(429, ['ok' => false, 'erreur' => 'Trop de demandes, réessayez dans un instant']);
}
@touch($verrou);

$sujet = '=?UTF-8?B?' . base64_encode("Demande de diagnostic — $entreprise") . '?=';
$corps = "Nouvelle demande depuis le site KOAST\n\n"
       . "Nom : $prenom $nom\n"
       . "Entreprise : $entreprise ($taille)\n"
       . "E-mail : $email\n"
       . "Téléphone : $telephone\n"
       . "Besoin : $besoin\n\n"
       . "Message :\n$message\n\n"
       . "Consentement RGPD / loi 2013-450 : oui\n"
       . "Envoyé le " . date('d/m/Y H:i') . " depuis $ip\n";

$entetes = [
    'From' => "KOAST Consulting <$EXPEDITEUR>",
    'Reply-To' => $email,
    'MIME-Version' => '1.0',
    'Content-Type' => 'text/plain; charset=UTF-8',
];

$ok = mail($DESTINATAIRE, $sujet, $corps, $entetes);
repondre($ok ? 200 : 500, ['ok' => $ok]);
