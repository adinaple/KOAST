import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // En local, le formulaire appelle /api/contact.php : lancez `npm run php` dans un 2e terminal
    // (nécessite PHP installé) pour le tester ; sinon il fonctionnera une fois en ligne sur Hostinger.
    proxy: { '/api': 'http://localhost:8000' },
  },
})
