import { defineConfig, presetWind4, transformerVariantGroup } from 'unocss';

export default defineConfig({
	presets: [presetWind4()],
	rules: [],
	safelist: [],
	theme: {
		breakpoints: {},
		colors: {},
		fontFamily: {},
	},
	transformers: [transformerVariantGroup()],
});
