import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useIsVisible } from "../../../utils/hooks/useIsVisible";
import BgImage from "../../../assets/images/product/bg.png";
import iChatGPT from "../../../assets/images/product/iChatGPT.svg";
import iLanguage from "../../../assets/images/product/iLanguage.svg";
import iSport from "../../../assets/images/product/iSports.svg";
import iMusic from "../../../assets/images/product/iMusic.svg";
import iImage from "../../../assets/images/product/iImage.svg";
import iVideo from "../../../assets/images/product/iVideo.svg";
import ImmersoCard from "../../../components/Card";

export default function Products() {
	const ref2 = useRef();
	const isVisible = useIsVisible(ref2);
	return (
		<section
			style={{ backgroundImage: `url(${BgImage})` }}
			ref={ref2}
			className={`transition-opacity ease-in duration-700 ${
				isVisible ? "opacity-100" : "opacity-0"
			} relative h-dvh min-h-[80rem] text-white lg:bg-cover md:bg-fit bg-no-repeat bg-right-top flex flex-column bg-blend-exclusion`}
		>
			<div className='absolute left-[15%] top-[8%] justify-items-center '>
				<div
					className={`${
						isVisible && "animate-slidein [--slidein-delay:500ms] opacity-0"
					} text-4xl font-manropebold tracking-wide leading-[4rem]`}
				>
					<div>Discover the Full Spectrum of Multimodal AI Tools.</div>
					<div>To Create, Engage, And prompt Your Stories.</div>
				</div>
			</div>
			<motion.div className='absolute left-[15%] w-full max-w-7xl lg:top-72 md:top-24 mx-auto flex flex-row flex-wrap justify-center gap-x-8 items-center'>
				<ImmersoCard
					label='iBharat ChatGPT'
					image={iChatGPT}
					isHoverable
				/>
				<ImmersoCard
					label='iLanguage'
					image={iLanguage}
					isHoverable
				/>
				<ImmersoCard
					label='iMusic'
					image={iMusic}
					isHoverable
				/>

				<ImmersoCard
					label='iSport'
					image={iSport}
					isHoverable
				/>
				<ImmersoCard
					label='iImage'
					image={iImage}
					isHoverable
				/>
				<ImmersoCard
					label='iVideo'
					image={iVideo}
					isHoverable
				/>
			</motion.div>
		</section>
	);
}

// lg:grid lg:grid-rows-2 lg:grid-cols-3 gap-4
