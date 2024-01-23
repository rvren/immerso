import React from "react";
import HeroBgImage from "../../../assets/images/logo.svg";
import Button from "../../../components/Button";

export default function Home() {
	return (
		<section
			style={{ backgroundImage: `url(${HeroBgImage})` }}
			className='h-screen text-white lg:bg-cover md:bg-fit bg-no-repeat bg-top bg-fixed'
		>
			<div className='relative top-60 flex flex-row'>
				<div className='basis-1/2'></div>
				<div className='basis-1/2'>
					<div className='text-7xl font-semibold leading-loose'>
						The Big Bang of AI
					</div>
					<div className='text-5xl font-normal leading-10'>
						Right Here Right Now !
					</div>
					<div className='text-lg font-light w-2/3 text-wrap my-12'>
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
		</section>
	);
}
