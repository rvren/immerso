import React from "react";
import Chip from "../../../assets/images/about/chip.png";
import BgImage from "../../../assets/images/about/bg.png";
import Button from "../../../components/Button";

export default function About() {
	return (
		<section
			style={{ backgroundImage: `url(${BgImage})` }}
			className='relative h-screen w-full text-white lg:bg-cover md:bg-fit bg-no-repeat bg-top '
		>
			<div className='relative top-20 text-center'>
				<div className=''>
					<div className='text-8xl tracking-widest font-manropeextrabold'>
						ABOUT IMMERSO AI
					</div>
				</div>
				<div className='relative top-20 left-20 grid grid-cols-2 flex justify-center justify-items-center'>
					<div className='w-3/4'>
						<img src={Chip} />
					</div>
					<div className='w-[60rem] flex flex-col justify-center align-items-center'>
						<div className='text-xl max-w-lg font-plexlight tracking-widest text-left'>
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
		</section>
	);
}
