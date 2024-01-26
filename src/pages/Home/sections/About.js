// import React, { useRef } from "react";
// import { useIsVisible } from "../../../utils/hooks/useIsVisible";
// import { motion, useScroll } from "framer-motion";
// import { ReactComponent as Chip } from "../../../assets/images/about/chip.svg";
// import BgImage from "../../../assets/images/about/bg.png";
// import TImage from "../../../assets/images/about/top.svg";
// import BImage from "../../../assets/images/about/bottom.svg";
// import BnImage from "../../../assets/images/about/banner.svg";
// import Button from "../../../components/Button";

// function template({ rotate, x }) {
// 	return `rotate(${rotate}) translateX(${x})`;
// }

// export default function About() {
// 	const refAbout = useRef();
// 	const isVisible = useIsVisible(refAbout);
// 	const { scrollYProgress } = useScroll();
// 	console.log("scrollYProgress", scrollYProgress);
// 	// const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

// 	return (
// 		<section
// 			// style={{ backgroundImage: `url(${BgImage})` }}
// 			ref={refAbout}
// 			className={`transition-opacity ease-in duration-700 ${
// 				isVisible ? "opacity-100" : "opacity-0"
// 			} h-[300rem] w-full text-white lg:bg-cover md:bg-fit bg-no-repeat bg-top `}
// 		>
// 			<div
// 				style={{
// 					position: "fixed",
// 					top: 0,
// 					right: 0,
// 					bottom: 0,
// 					left: 0,
// 					margin: "auto",
// 				}}
// 			>
// 				<motion.div
// 					className='w-[100rem] mt-[20rem]'
// 					layoutScroll
// 					style={{ overflow: "scroll" }}
// 				>
// 					<motion.img
// 						src={TImage}
// 						alt='d-pic'
// 						style={{
// 							transform: `translateY(-${scrollYProgress})`,
// 						}}
// 					/>
// 					<motion.img
// 						src={BImage}
// 						alt='d-pic'
// 						style={{ transform: `translateY(-${scrollYProgress})` }}
// 						// className='h-[20rem]'
// 					/>
// 				</motion.div>
// 			</div>
// 			<div className='flex justify-center justify-items-center left-0 text-center'>
// 				<div>
// 					{/* <div className=''>
// 						<img
// 							src={BnImage}
// 							alt='d-pic'
// 							className='w-full max-h[40rem]'
// 						/>
// 					</div> */}
// 				</div>

// 				<div className='absolute top-72 left-20 grid grid-cols-2 flex justify-center justify-items-center hidden'>
// 					<div className='w-3/4'>
// 						<Chip className='mt-[15%] ml-[5vw]' />
// 					</div>
// 					<div className='w-[70rem] flex flex-col justify-center align-items-center'>
// 						<div
// 							className={`${
// 								isVisible && "animate-slidein [--slidein-delay:500ms] opacity-0"
// 							} text-xl max-w-2xl font-plexlight tracking-wide text-left text-igrey leading-10`}
// 						>
// 							Immerso.ai: An Imaginative Deep Tech and Generative AI company,
// 							under the Eros Investment Group. Our mission is to pioneer the
// 							generative media landscape, leveraging our rich intellectual
// 							property and licensed data. At the heart of Immerso.ai lies a
// 							commitment to cultivating advanced foundation models, enhancing
// 							value for users, creators, and brands alike. With a focus on
// 							multimodal foundation and specialized models, we cater to diverse
// 							industry needs. Immerso.ai also represents the future of deep
// 							technology, encompassing state-of-the-art Cloud & GPU
// 							Infrastructure, an AI University, and a thriving hub for
// 							Generative AI startups and enterprises
// 						</div>
// 						<Button
// 							variant='gradient'
// 							text='Know More'
// 						/>
// 					</div>
// 				</div>
// 			</div>

// 			<div className='w-full absolute -bottom-20 text-center text-4xl tracking-wider text-igrey font-plexlight hidden'>
// 				Artificially Intelligent.Genuinely useful
// 			</div>
// 		</section>
// 	);
// }

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
			className={`transition-opacity ease-in duration-700 ${
				isVisible ? "opacity-100" : "opacity-0"
			} relative h-screen w-full text-white lg:bg-cover md:bg-fit bg-no-repeat bg-top `}
		>
			<div className='top-30 left-0 text-center'>
				<div className='absolute top-28 h-[6.5rem] my-auto mx-48 w-full text-center overflow-hidden '>
					<div
						className={`${
							isVisible && "animate-slidein [--slidein-delay:300ms] opacity-0"
						} opacity-0 text-9xl tracking-widest text-justify font-manropeextrabold`}
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
							Immerso.ai: An Imaginative Deep Tech and Generative AI company,
							under the Eros Investment Group. Our mission is to pioneer the
							generative media landscape, leveraging our rich intellectual
							property and licensed data. At the heart of Immerso.ai lies a
							commitment to cultivating advanced foundation models, enhancing
							value for users, creators, and brands alike. With a focus on
							multimodal foundation and specialized models, we cater to diverse
							industry needs. Immerso.ai also represents the future of deep
							technology, encompassing state-of-the-art Cloud & GPU
							Infrastructure, an AI University, and a thriving hub for
							Generative AI startups and enterprises
						</div>
						<Button
							variant='gradient'
							text='Know More'
						/>
					</div>
				</div>
			</div>
			<div className='w-full absolute -bottom-20 text-center text-4xl tracking-wider text-igrey font-plexlight'>
				Artificially Intelligent.Genuinely useful
			</div>
		</section>
	);
}
