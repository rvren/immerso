import React, { useRef } from "react";
import { useIsVisible } from "../../../utils/hooks/useIsVisible";
import BgImage from "../../../assets/images/news/news.png";
import CenterImage from "../../../assets/images/news/center.svg";
import GlassImage from "../../../assets/images/news/glass.svg";
import ArrowImage from "../../../assets/images/news/arrow.svg";
import NewsImage from "../../../assets/images/news/newsbg.png";

export default function News() {
	const refNews = useRef();
	const isVisible = useIsVisible(refNews);
	return (
		<section
			style={{
				backgroundImage: `url(${BgImage})`,
			}}
			ref={refNews}
			className={`transition-opacity ease-in duration-700 ${
				isVisible ? "opacity-100" : "opacity-0"
			} relative h-screen min-h-[80rem] w-full text-white lg:bg-cover md:bg-fit bg-no-repeat bg-top`}
		>
			<div
				className='absolute w-[40rem] h-[50rem] top-48 left-[35%]'
				style={{ backgroundImage: `url(${CenterImage})` }}
			></div>
			<div className='absolute left-[18%] top-[18%] justify-items-center '>
				<div className='text-4xl font-manropebold tracking-wide leading-[4rem]'>
					<div
						className={`${
							isVisible && "animate-slidein [--slidein-delay:300ms] opacity-0"
						} opacity-0`}
					>
						Immerso.ai Chronicles
					</div>
					<div
						className={`${
							isVisible && "animate-slidein [--slidein-delay:500ms] opacity-0"
						} opacity-0`}
					>
						Stay Informed
					</div>
				</div>
				<div className='relative cursor-pointer '>
					<img
						src={NewsImage}
						alt='news_bg'
						className='h-[28rem] my-4'
					/>
					<img
						src={GlassImage}
						alt='glass_bg'
						className='absolute top-72 -right-[14rem] h-[17rem] backdrop-blur-3xl'
					/>
					<div
						className={`${
							isVisible && "animate-slidein [--slidein-delay:300ms] opacity-0"
						} opacity-0 absolute top-[20rem] left-[28rem] text-4xl font-plexmedium`}
					>
						Gujarat government, Eros Investment Group Launch AI Park and AI
						University
					</div>
					<div
						className={`${
							isVisible && "animate-slidein [--slidein-delay:500ms] opacity-0"
						} opacity-0 absolute top-[30rem] left-[28rem] font-plexmedium`}
					>
						15 January 2024
					</div>
					<img
						src={ArrowImage}
						alt='arrow_bg'
						className='absolute top-[28rem] -right-[12rem] h-[4rem] '
					/>
				</div>
			</div>
		</section>
	);
}
