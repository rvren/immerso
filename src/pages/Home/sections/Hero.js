import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useIsVisible } from "../../../utils/hooks/useIsVisible";
import HeroBgImage from "../../../assets/images/home/bgoverlay1.svg";
import HeroBgVideo from "../../../assets/images/home/bgvideo1.mp4";
import HeroGif1 from "../../../assets/images/home/bggif1.gif";
import DynamicHero from "./components/DynamicHero";
import Button from "../../../components/Button";

export default function Home() {
	const ref1 = useRef();
	const isVisible = useIsVisible(ref1);
	return (
		<motion.section
			style={{
				backgroundImage: `url(${HeroBgImage})`,
				backgroundSize: "100% 130rem",
			}}
			ref={ref1}
			className={`transition-opacity ease-in duration-700 ${
				isVisible ? "opacity-100" : "opacity-0"
			} h-screen min-h-[80rem] w-full text-white lg:bg-cover md:bg-fit bg-no-repeat bg-[center_top_-6rem]`}
		>
			<DynamicHero />
		</motion.section>
	);
}
