import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useIsVisible } from "../../../utils/hooks/useIsVisible";
import HeroBgImage from "../../../assets/images/bg.png";
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
			} h-screen min-h-[90rem] w-full text-white lg:bg-cover md:bg-fit bg-no-repeat bg-[center_top_-6rem]`}
		>
			<div className='relative top-60 flex flex-row '>
				<div className='lg:basis-1/2'></div>
				<div className='lg:basis-1/2  md:w-full'>
					<div
						className={`${
							isVisible && "animate-slidein [--slidein-delay:300ms] opacity-0"
						} text-7xl font-semibold leading-loose font-manropebold tracking-tight hero-title inline-block bg-clip-text text-transparent`}
					>
						The Big Bang of AI
					</div>
					<div
						className={`${
							isVisible && "animate-slidein [--slidein-delay:500ms] opacity-0"
						} text-5xl font-normal leading-10 font-manropemedium tracking-tight	hero-title inline-block bg-clip-text text-transparent h-[4rem]`}
					>
						Right Here Right Now !
					</div>
					<div
						className={`${
							isVisible && "animate-slidein [--slidein-delay:700ms] opacity-0"
						} opacity-0 text-lg w-2/3 text-wrap my-8 text-igrey tracking-wide font-plexlight`}
					>
						A leading international AI firm at the forefront of AI advancements,
						offering advanced tools and services tailored for the future. This
						company enables both individuals and businesses, pushing the limits
						of what's possible in creativity, intelligence, and dynamic
						entertainment. It turns your creative visions into tangible
						realities and is shaping the future of AI technology.
					</div>
					<Button
						variant='gradient'
						text='Take a deep dive'
					/>
				</div>
			</div>
		</motion.section>
	);
}
