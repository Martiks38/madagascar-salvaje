/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero-footer': 'url("/images/hero-footer.jpg")',
				'hero-night': 'url("/images/hero-dark.jpg")'
			},
			colors: {
				'white-80': 'rgb(255 255 255 / 0.80)'
			},
			gridTemplateColumns: {
				suggestions: 'repeat(auto-fit, minmax(auto, 18rem))'
			}
		}
	},
	plugins: []
}
