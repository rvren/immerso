import React from "react";
import BgImage from "../../../assets/images/product/bg.png";
import Button from "../../../components/Button";

export default function About() {
	return (
		<section
			style={{ backgroundImage: `url(${BgImage})` }}
			className='h-screen text-white lg:bg-cover md:bg-fit bg-no-repeat bg-top '
		>
			<div className='relative top-20 text-center'>
				<div className=''>
					<div className='text-4xl font-normal leading-10'>
						Discover the Full Spectrum of Multimodal AI Tools.
					</div>
					<div className='text-4xl font-normal'>
						To Create, Engage, And prompt Your Stories.
					</div>
				</div>
			</div>
		</section>
	);
}
