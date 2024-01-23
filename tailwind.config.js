/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
	content: [
		"./src/**/*.{js,jsx,ts,tsx,svg,png}",
		"./src/**/**/*.{js,jsx,ts,tsx,svg,png}",
	],
	theme: {
		colors: {
			iviolet: "#9600FF",
			igreen: "#00D3A9",
			igrey: "#E5E5E5",
		},
		extend: {
			fontFamily: {
				plexbold: "PlexMonoBold",
				plexmedium: "PlexMonoMedium",
				plexlight: "PlexMonoLight",
				manropebold: "ManropeBold",
				manropemedium: "ManropeMedium",
			},
		},
	},
	plugins: [],
});
