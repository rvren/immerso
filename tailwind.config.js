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
				"gradient-white": "linear-gradient(174deg, var(--tw-gradient-stops))",
			},
			transitionTimingFunction: {
				"in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
				"out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
			},
			keyframes: {
				slidein: {
					from: {
						opacity: 0,
						transform: "translateY(-10px)",
					},
					to: {
						opacity: 1,
						transform: "translateY(0)",
					},
				},
			},
			animation: {
				slidein: "slidein 1s ease var(--slidein-delay, 0) forwards",
			},
		},
	},
	plugins: [],
});
