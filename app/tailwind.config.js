module.exports = {
	mode: "jit",
	purge: {
		enabled: true,
		content: [ "./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}" ]
	},
	corePlugins: {
		float: false,
		clear: false,
		userSelect: false,
		objectPosition: false
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			flex: {
				2: "2 1 0",
				3: "3 1 0",
				4: "4 1 0",
				5: "5 1 0"
			}
		}
	},
	variants: {
		extend: {
			scale: [ "active", "focus-visible" ]
		}
	},
	plugins: []
};
