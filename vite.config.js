import { resolve } from 'path';
import { defineConfig } from 'vite';
import { liveReload } from 'vite-plugin-live-reload';
import { webfontDownload } from 'vite-plugin-webfont-dl';

const root = resolve(__dirname, './src');
const outDir = resolve(__dirname, './dist');

export default defineConfig({
	root,
	build: {
		outDir,
		emptyOutDir: true,
		rollupOptions: {
			input: {
				team: resolve(root, 'team.html'),
			},
		},
	},
	plugins: [webfontDownload(), liveReload('./src/**/*.{html,js,ts,jsx,tsx}')],
});
