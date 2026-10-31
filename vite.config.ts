import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import unocss from 'unocss/vite';
import tools from 'vite-plugin-vue-devtools';
import { defineConfig } from 'vite-plus';

export default defineConfig({
	plugins: [vue(), tools(), unocss()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('src', import.meta.url)),
		},
	},
	staged: {
		'**/*.*': [
			'eslint',
			'cspell --no-progress --no-must-find-files',
		],
	},
});
