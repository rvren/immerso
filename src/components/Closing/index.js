import React, { useRef } from "react";
import { useIsVisible } from "../../utils/hooks/useIsVisible";
import BgImage from "../../assets/images/closing/connect.png";
import Button from "../../components/Button";

export default function Closing({ text, subText, ctaText }) {
	const refClosing = useRef();
	const isVisible = useIsVisible(refClosing);
	return (
		<section
			style={{ backgroundImage: `url(${BgImage})` }}
			ref={refClosing}
			className={`transition-opacity ease-in duration-700 ${
				isVisible ? "opacity-100" : "opacity-0"
			} h-screen w-full text-white lg:bg-cover md:bg-fit bg-no-repeat bg-top`}
		>
			<div className='relative top-1/3 text-center'>
				<div
					className={`${
						isVisible && "animate-slidein [--slidein-delay:300ms] opacity-0"
					} text-5xl font-manropemedium leading-normal text-white bg-clip-text tracking-tight`}
				>
					{text}
				</div>
				<div
					className={`${
						isVisible && "animate-slidein [--slidein-delay:500ms] opacity-0"
					} text-7xl font-manropebold leading-normal tracking-tight bg-gradient-to-r from-iviolet to-igreen inline-block text-transparent bg-clip-text`}
				>
					{subText}
				</div>
				<div
					className={`${
						isVisible && "animate-slidein [--slidein-delay:700ms] opacity-0"
					} `}
				>
					<Button
						variant='gradient'
						text={ctaText}
					/>
				</div>
			</div>
		</section>
	);
}
