import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//Declarando react de manera global lo cual no es necesario
//cargarlo en cada uno de los archivos.
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
