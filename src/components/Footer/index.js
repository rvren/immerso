import React from "react";
import { Typography } from "@material-tailwind/react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { COLORS } from "../../utils/Constants";
import HeroBgImage from "../../assets/images/footer/footer.png";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as Discord } from "../../assets/images/footer/discord.svg";
import { ReactComponent as Facebook } from "../../assets/images/footer/facebook.svg";
import { ReactComponent as Twitter } from "../../assets/images/footer/twitter.svg";
import { ReactComponent as Youtube } from "../../assets/images/footer/youtube.svg";

const LINKS = [
	{
		title: "Get in Touch",
		items: [
			<div className='w-full font-plexmedium flex items-start justify-center color-ibodygrey'>
				<div>
					{React.createElement(MapPinIcon, {
						strokeWidth: 1,
						className: "h-6 text-ibodygrey mr-2 mt-1",
					})}
				</div>
				<div>
					Immerso AIIP Limited, <br />
					Second Floor, 18-20 North Quay, <br />
					Douglas, Isle of Man IM1 4LE.
				</div>
			</div>,
		],
	},
	{ title: "", items: [] },
	{
		title: "Popular Links",
		items: ["Home", "Research", "Products", "Company", "Pricing"],
	},
];

const currentYear = new Date().getFullYear();

export default function Footer() {
	return (
		<footer
			className='animate-slidein [--slidein-delay:500ms] opacity-0 relative bg-cover bg-no-repeat bg-center'
			style={{ backgroundImage: `url(${HeroBgImage})` }}
		>
			<div className='px-8 py-8'>
				<div className='flex flex-row gap-y-6 gap-x-24 py-6 md:justify-between grid grid-cols-2'>
					<div className='relative left-48 flex flex-row justify-left'>
						<Logo />
					</div>
					<div className='grid grid-cols-3 gap-y-2 -ml-24'>
						{LINKS.map(({ title, items }) => (
							<ul key={title}>
								<Typography
									variant='small'
									color='white'
									className='mb-3 text-lg	text-left font-plexmedium'
								>
									{title}
								</Typography>
								{items.map((link) => (
									<li key={link}>
										<Typography
											as='a'
											href='#'
											className='py-1.5 text-left text-ibodygrey font-plexmedium'
										>
											{link}
										</Typography>
									</li>
								))}
							</ul>
						))}
						<div className='flex gap-12 text-blue-gray-900 sm:justify-start'>
							<Typography
								as='a'
								href='#'
								className='opacity-80 h-12 w-12 transition-opacity hover:opacity-100'
							>
								<Youtube />
							</Typography>
							<Typography
								as='a'
								href='#'
								className='opacity-80 h-12 w-12 transition-opacity hover:opacity-100'
							>
								<Discord />
							</Typography>
							<Typography
								as='a'
								href='#'
								className='opacity-80 h-12 w-12 transition-opacity hover:opacity-100'
							>
								<Twitter />
							</Typography>
							<Typography
								as='a'
								href='#'
								className='opacity-80 h-12 w-12 transition-opacity hover:opacity-100'
							>
								<Facebook />
							</Typography>
						</div>
					</div>
				</div>
				<div className='flex  flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 py-6 text-center md:justify-around '>
					<div>
						<Typography className='text-white text-start md:mb-0 font-plexmedium'>
							Terms & Conditions
						</Typography>
						<Typography
							variant='small'
							className='mb-4 text-start text-white md:mb-0 font-plexlight text-xs'
						>
							Copyright@immerso.ai {currentYear}
						</Typography>
					</div>
					<ul className='flex flex-wrap items-center grid grid-cols-3 gap-48'>
						<li>
							<Typography
								as='a'
								href='#'
								color='blue-gray'
								className='font-normal transition-colors text-white font-plexmedium -ml-32 '
							>
								GDPR
							</Typography>
						</li>
						<li>
							<Typography
								as='a'
								href='#'
								color='blue-gray'
								className='font-normal transition-colors text-white font-plexmedium'
							>
								Legal
							</Typography>
						</li>
						<li>
							<Typography
								as='a'
								href='#'
								color='blue-gray'
								className='font-normal transition-colors text-white font-plexmedium'
							>
								Disclaimer
							</Typography>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}
