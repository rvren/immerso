import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useIsVisible } from "../../../utils/hooks/useIsVisible";
import HeroBgImage from "../../../assets/images/about.svg";
import Button from "../../../components/Button";

export default function Home() {
	const ref1 = useRef();
	const isVisible = useIsVisible(ref1);
	return (
		<motion.section
			style={{
				backgroundImage: `url(${HeroBgImage})`,
				backgroundSize: "100% 60rem",
			}}
			ref={ref1}
			className={`transition-opacity ease-in duration-700 ${
				isVisible ? "opacity-100" : "opacity-0"
			} h-screen min-h-[90rem] w-full text-white lg:bg-cover md:bg-fit bg-no-repeat bg-top`}
		>
			<div className='relative top-60 left-72 flex flex-col'>
				<div
					className={`${
						isVisible && "animate-slidein [--slidein-delay:300ms] opacity-0"
					} text-7xl font-semibold leading-snug font-manropebold tracking-tight hero-title inline-block bg-clip-text text-transparent`}
				>
					We’d love
				</div>
				<div
					className={`${
						isVisible && "animate-slidein [--slidein-delay:300ms] opacity-0"
					} text-7xl font-semibold leading-snug font-manropebold tracking-tight hero-title inline-block bg-clip-text text-transparent`}
				>
					to hear from you
				</div>
			</div>
		</motion.section>
	);
}
