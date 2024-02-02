import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useIsVisible } from "../../../utils/hooks/useIsVisible";
import HeroBgImage from "../../../assets/images/home/bgoverlay1.svg";
import DynamicHero from "./components/DynamicHero";

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
			} h-screen  min-h-[65rem] w-full text-white lg:bg-cover md:bg-fit bg-no-repeat bg-center`}
		>
			{/* <div className='relative'> */}
			{/* <img
					class='absolute inset-0 h-full w-full object-cover'
					src={HeroBgImage}
					alt='build your website'
				/> */}
			<DynamicHero />
			{/* </div> */}
		</motion.section>
	);
}
