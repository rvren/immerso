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
			ibodygrey: "#C7C5C5",
		},
		extend: {
			fontFamily: {
				plexbold: "PlexMonoBold",
				plexmedium: "PlexMonoMedium",
				plexlight: "PlexMonoLight",
				manropemedium: "ManropeMedium",
				manropebold: "ManropeBold",
				manropeextrabold: "ManropeExtraBold",
			},
			backgroundImage: {
				"gradient-green": "linear-gradient(145deg, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
});
