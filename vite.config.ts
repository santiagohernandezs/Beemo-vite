import react from "@vitejs/plugin-react"
import * as path from "path"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@pages': path.resolve(__dirname, 'src/pages'),
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@sass': path.resolve(__dirname, 'src/sass'),
			'@styles': path.resolve(__dirname, 'src/styles'),
			'@hooks': path.resolve(__dirname, 'src/hooks'),
			'@models': path.resolve(__dirname, 'src/models'),
			'@data': path.resolve(__dirname, 'src/data')
		}
	}
})
