import React from "react";
import HeroBgImage from "../../../assets/images/hero.png";
import Button from "../../../components/Button";

export default function Home() {
	return (
		<section
			style={{ backgroundImage: `url(${HeroBgImage})` }}
			className=' h-screen w-full text-white lg:bg-cover md:bg-fit bg-no-repeat bg-top'
		>
			<div className='relative top-60 flex flex-row '>
				<div className='lg:basis-1/2'></div>
				<div className='lg:basis-1/2 backdrop-blur md:w-full'>
					<div className='text-7xl font-semibold leading-loose font-manropebold'>
						The Big Bang of AI
					</div>
					<div className='text-5xl font-normal leading-10 font-manropemedium'>
						Right Here Right Now !
					</div>
					<div className='text-lg w-2/3 text-wrap my-12 text-igrey tracking-widest font-plexlight'>
						Harness the power of Immerso.ai, a future-ready generative AI
						platform that allows businesses across industries to capture ideas,
						engage their audience, and deliver an exceptional user experience.
					</div>
					<Button
						variant='gradient'
						text='Take a deep dive'
					/>
				</div>
			</div>
			<div className='w-full absolute bottom-10 text-center	text-4xl tracking-wider	text-igrey font-plexlight'>
				Artificially Intelligent.Genuinely useful
			</div>
		</section>
	);
}
