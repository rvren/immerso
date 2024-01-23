import React from "react";
import BgImage from "../../../assets/images/blog/bg.png";

export default function About() {
	return (
		<section
			style={{ backgroundImage: `url(${BgImage})` }}
			className='h-screen w-full size-max text-white lg:bg-cover md:bg-fit bg-no-repeat bg-top'
		>
			<div className='relative top-1/3 text-center'>
				<div className='text-5xl font-manropemedium leading-normal text-transparent bg-clip-text bg-gradient-green from-white to-igreen tracking-tight'>
					<div>Future Tech Unfolded</div>
					<div>Discovering Tomorrow's Solutions</div>
				</div>
				<div className='text-1xl w-full font-plexlight tracking-wide my-12 leading-8	flex justify-center justify-items-center'>
					<div className='w-[60rem]'>
						Explore the Frontier of AI Innovations in our AI Research Hub. Delve
						into everything from machine learning breakthroughs to the ethical
						application of AI, as we unravel the ways AI is reshaping our world.
					</div>
				</div>
			</div>
		</section>
	);
}
