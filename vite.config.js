import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/clientsyncpro-client-dashboard-ui/",
  plugins: [react()]
})