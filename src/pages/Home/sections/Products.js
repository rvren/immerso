import React from "react";
import BgImage from "../../../assets/images/product/bg.png";
import iChatGPT from "../../../assets/images/product/iChatGPT.png";
import iLanguage from "../../../assets/images/product/iLanguage.png";
import iSport from "../../../assets/images/product/iSports.png";
import iMusic from "../../../assets/images/product/iMusic.png";
import iImage from "../../../assets/images/product/iImage.png";
import iVideo from "../../../assets/images/product/iVideo.png";
import ImmersoCard from "../../../components/Card";

export default function Products() {
	return (
		<section
			style={{ backgroundImage: `url(${BgImage})` }}
			className='relative h-screen min-h-[80rem] text-white lg:bg-cover md:bg-fit bg-no-repeat bg-right-top flex flex-column'
		>
			<div className='absolute top-20 left-72 text-start'>
				<div className='text-4xl font-manropemedium tracking-widest leading-relaxed'>
					<div>Discover the Full Spectrum of Multimodal AI Tools.</div>
					<div>To Create, Engage, And prompt Your Stories.</div>
				</div>
			</div>
			<div className='absolute w-full max-w-[86rem] lg:top-72 lg:left-72 md:top-24 md:left-24 flex flex-row flex-wrap'>
				<ImmersoCard
					label='iBharat ChatGPT'
					image={iChatGPT}
				/>
				<ImmersoCard
					label='iLanguage'
					image={iLanguage}
				/>
				<ImmersoCard
					label='iMusic'
					image={iMusic}
				/>
				<ImmersoCard
					label='iSport'
					image={iSport}
				/>
				<ImmersoCard
					label='iImage'
					image={iImage}
				/>
				<ImmersoCard
					label='iVideo'
					image={iVideo}
				/>
			</div>
		</section>
	);
}

// lg:grid lg:grid-rows-2 lg:grid-cols-3 gap-4
