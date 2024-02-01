import React, { useRef } from "react";
import { useIsVisible } from "../../../utils/hooks/useIsVisible";
import { ReactComponent as Chip } from "../../../assets/images/about/chip.svg";
import BgImage from "../../../assets/images/about/bg.png";
import Button from "../../../components/Button";

export default function About() {
	const refAbout = useRef();
	const isVisible = useIsVisible(refAbout);
	return (
		<section
			style={{ backgroundImage: `url(${BgImage})` }}
			ref={refAbout}
			className={`relative h-screen w-full text-white lg:bg-cover md:bg-fit bg-no-repeat bg-top `}
		>
			<div className='top-30 left-0 text-center'>
				<div className='absolute top-28 h-[6.5rem] my-auto mx-48 w-full text-center overflow-hidden '>
					<div
						className={`${
							isVisible && "animate-slidein [--slidein-delay:300ms] opacity-0"
						} animate-slidein [--slidein-delay:300ms] opacity-0 text-9xl tracking-widest text-justify font-manropeextrabold`}
					>
						ABOUT IMMERSO AI
					</div>
				</div>
				<div className='absolute top-72 left-20 grid grid-cols-2 flex justify-center justify-items-center'>
					<div className='w-3/4'>
						<Chip className='mt-[15%] ml-[5vw]' />
					</div>
					<div className='w-[70rem] flex flex-col justify-center align-items-center'>
						<div
							className={`${
								isVisible && "animate-slidein [--slidein-delay:500ms] opacity-0"
							} text-xl max-w-2xl font-plexlight tracking-wide text-left text-igrey leading-10`}
						>
							An Imaginative Deep Tech and Generative AI company, under the Eros
							Investment Group. Our mission is to pioneer the generative media
							landscape, leveraging our rich intellectual property and licensed
							data. At the heart of Immerso.ai lies a commitment to cultivating
							advanced foundation models, enhancing value for users, creators,
							and brands alike. With a focus on multimodal foundation and
							specialized models, we cater to diverse industry needs. Immerso.ai
							also represents the future of deep technology, encompassing state
							of the art Cloud & GPU Infrastructure, an AI University, and a
							thriving hub for Generative AI startups and enterprises
						</div>
						<Button
							variant='gradient'
							text='Know More'
						/>
					</div>
				</div>
			</div>
			<div className='w-full absolute -bottom-20 text-center text-4xl tracking-wider text-igrey font-plexlight'>
				Artificially Intelligent. Genuinely useful
			</div>
		</section>
	);
}
