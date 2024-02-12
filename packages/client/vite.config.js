import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
    plugins: [react()],
    build: {
        outDir: '../server/public'
    },
    server: {
        ...mode === 'development' ? {
            proxy: {
                '/api': {
                    target: 'http://localhost:3030',
                    changeOrigin: true,
                    secure: false,
                    ws: true
                }
            }
        } : null,
    }
}))
