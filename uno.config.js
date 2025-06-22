import preset from '@somehow-digital/unocss-preset';
import { defineConfig, transformerVariantGroup } from 'unocss';

export default defineConfig({
	presets: [preset()],
	rules: [],
	safelist: [],
	theme: {
		breakpoints: {},
		colors: {},
		fontFamily: {},
	},
	transformers: [transformerVariantGroup()],
});
