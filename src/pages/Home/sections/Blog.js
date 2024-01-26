import React, { useRef } from "react";
import { useIsVisible } from "../../../utils/hooks/useIsVisible";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import BgImage from "../../../assets/images/blog/bg.png";
import First from "../../../assets/images/blog/1st.png";
import Second from "../../../assets/images/blog/2nd.png";
import Third from "../../../assets/images/blog/3rd.png";
import Fourth from "../../../assets/images/blog/4th.png";
import Fifth from "../../../assets/images/blog/5th.png";
import BlogCard from "../../../components/BlogCard";

export default function Blog() {
	const refBlog = useRef();
	const isVisible = useIsVisible(refBlog);
	return (
		<section
			style={{ backgroundImage: `url(${BgImage})` }}
			ref={refBlog}
			className={`transition-opacity ease-in duration-700 ${
				isVisible ? "opacity-100" : "opacity-0"
			} h-[120rem] w-full size-max text-white lg:bg-cover md:bg-fit bg-no-repeat bg-top  bg-blend-lighten`}
		>
			<div className='relative top-1/4 text-center'>
				<div
					className={`${
						isVisible && "animate-slidein [--slidein-delay:300ms] opacity-0"
					} text-5xl font-manropemedium leading-normal text-transparent bg-clip-text bg-gradient-green from-white to-igreen tracking-tight`}
				>
					<div>Future Tech Unfolded</div>
					<div>Discovering Tomorrow's Solutions</div>
				</div>
				<div className='text-1xl w-full font-plexlight tracking-wide my-12 leading-8	flex justify-center justify-items-center'>
					<div
						className={`${
							isVisible && "animate-slidein [--slidein-delay:500ms] opacity-0"
						} w-[60rem]`}
					>
						Explore the Frontier of AI Innovations in our AI Research Hub. Delve
						into everything from machine learning breakthroughs to the ethical
						application of AI, as we unravel the ways AI is reshaping our world.
					</div>
				</div>
				<div
					className={`${
						isVisible && "animate-slidein [--slidein-delay:700ms] opacity-0"
					} mt-72 h-[20rem] w-[80rem] mx-auto`}
				>
					<Swiper
						effect={"coverflow"}
						grabCursor={true}
						centeredSlides={"auto"}
						loop={true}
						slidesPerView={"3"}
						rewind={true}
						coverflowEffect={{
							rotate: 0,
							stretch: 100,
							depth: 150,
							modifier: 1.5,
							slideShadows: false,
						}}
						pagination={{ el: ".swiper-pagination", clickable: true }}
						navigation={{
							nextEl: ".swiper-button-next",
							prevEl: ".swiper-button-prev",
							clickable: true,
						}}
						modules={[EffectCoverflow, Pagination, Navigation]}
						className='swiper_container'
					>
						<SwiperSlide>
							<BlogCard
								label='Our mission is to build multimodal AI systems'
								image={First}
							/>
						</SwiperSlide>
						<SwiperSlide>
							<BlogCard
								label='Our mission is to build multimodal AI systems'
								image={Second}
							/>
						</SwiperSlide>
						<SwiperSlide>
							<BlogCard
								label='Our mission is to build multimodal AI systems'
								image={Third}
							/>
						</SwiperSlide>
						<SwiperSlide>
							<BlogCard
								label='Our mission is to build multimodal AI systems'
								image={Fourth}
							/>
						</SwiperSlide>
						<SwiperSlide>
							<BlogCard
								label='Our mission is to build multimodal AI systems'
								image={Fifth}
							/>
						</SwiperSlide>
						<SwiperSlide>
							<BlogCard
								label='Our mission is to build multimodal AI systems'
								image={Third}
							/>
						</SwiperSlide>
						<SwiperSlide>
							<BlogCard
								label='Our mission is to build multimodal AI systems'
								image={Fourth}
							/>
						</SwiperSlide>
						<SwiperSlide>
							<BlogCard
								label='Our mission is to build multimodal AI systems'
								image={Fifth}
							/>
						</SwiperSlide>

						<div className='swiper-button-prev'></div>
						<div className='swiper-button-next'></div>
					</Swiper>
				</div>
			</div>
		</section>
	);
}
