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
			style={{
				backgroundImage: `url(${BgImage})`,
				backgroundSize: "100% 90rem",
			}}
			ref={ref2}
			className={`transition-opacity ease-in duration-700 ${
				isVisible ? "opacity-100" : "opacity-0"
			} h-screen min-h-[90rem] w-full text-white lg:bg-cover md:bg-cover bg-no-repeat bg-right-top bg-blend-exclusion pt-24`}
		>
			<div className='w-[95rem] m-auto h-[100rem]'>
				<p
					className={`${
						isVisible && "animate-slidein [--slidein-delay:500ms] opacity-0"
					} text-4xl font-manropemedium tracking-wide leading-[4rem] text-start ml-36`}
				>
					<div>Discover the Full Spectrum of Multimodal AI Tools.</div>
					<div>To Create, Engage, And prompt Your Stories.</div>
				</p>

				<motion.div className='w-[95rem] mx-auto flex flex-row flex-wrap justify-center gap-x-8 items-center pt-24'>
					<ImmersoCard
						label='iBharatBol'
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
			</div>
		</section>
	);
}

// lg:grid lg:grid-rows-2 lg:grid-cols-3 gap-4
