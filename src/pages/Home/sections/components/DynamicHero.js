import React, { useEffect, useRef } from "react";
import { useIsVisible } from "../../../../utils/hooks/useIsVisible";
import HeroBgImage from "../../../../assets/images/home/bgoverlay1.svg";
import HeroBgVideo1 from "../../../../assets/images/home/bgvideo1.mp4";
import HeroBgVideo2 from "../../../../assets/images/home/bgvideo2.mp4";
import HeroGif1 from "../../../../assets/images/home/bggif1.gif";
import HeroGif2 from "../../../../assets/images/home/bggif2.gif";
import Button from "../../../../components/Button";

const DYNAMIC_CONTENT_MAPPING = {
	1: {
		image: HeroBgImage,
		video: HeroBgVideo1,
		gif: HeroGif1,
		title: "The Big Bang of AI",
		subtTitle: "Right Here Right Now !",
		description:
			"Innovating at the forefront of deep technology, the company  specializes in AI research, infrastructure, and intellectual property solutions. It equips individuals and enterprises with user-friendly, cutting-edge tools and services, that bring creative ideas to life while crafting the future of AI.",
	},
	2: {
		image: HeroBgImage,
		video: HeroBgVideo2,
		gif: HeroGif2,
		title: "The Big Bang of AI",
		subtTitle: "Right Here Right Now !",
		description:
			"Innovating at the forefront of deep technology, the company  specializes in AI research, infrastructure, and intellectual property solutions. It equips individuals and enterprises with user-friendly, cutting-edge tools and services, that bring creative ideas to life while crafting the future of AI.",
	},
};

export default function DynamicHero() {
	const ref1 = useRef();
	const isVisible = useIsVisible(ref1);

	const count = JSON.parse(localStorage.getItem("refreshCount")) ?? 1;
	return (
		<div ref={ref1}>
			<div class='video-docker absolute top-0 left-0 w-full h-[65rem] overflow-hidden backdrop-blur-2xl'>
				<video
					className='min-w-full min-h-full absolute object-cover'
					autoPlay
					loop
					muted
				>
					<source
						src={DYNAMIC_CONTENT_MAPPING[count]?.video}
						type='video/mp4'
					/>
				</video>
			</div>
			<div className='relative top-60 flex flex-row '>
				<div className='lg:basis-1/2 flex flex-row justify-center -mt-12'>
					<img
						src={DYNAMIC_CONTENT_MAPPING[count]?.gif}
						alt='loading...'
					/>
				</div>
				<div className='lg:basis-1/2  md:w-full'>
					<div
						className={`${
							isVisible && "animate-slideup [--slidein-delay:300ms] opacity-0"
						} text-7xl font-semibold leading-loose font-manropebold tracking-tight hero-title inline-block bg-clip-text text-transparent`}
					>
						{DYNAMIC_CONTENT_MAPPING[count]?.title}
					</div>
					<div
						className={`${
							isVisible && "animate-slideup [--slidein-delay:300ms] opacity-0"
						} text-5xl font-normal leading-10 font-manropemedium tracking-tight	hero-title inline-block bg-clip-text text-transparent h-[4rem]`}
					>
						{DYNAMIC_CONTENT_MAPPING[count]?.subtTitle}
					</div>
					<div
						className={`${
							isVisible && "animate-slideup [--slidein-delay:300ms] opacity-0"
						} opacity-0 text-lg w-2/3 text-wrap my-8 text-igrey tracking-wide font-plexlight`}
					>
						{DYNAMIC_CONTENT_MAPPING[count]?.description}
					</div>
					<Button
						variant='gradient'
						text='Take a deep dive'
					/>
				</div>
			</div>
		</div>
	);
}
