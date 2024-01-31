import React, { useState, useEffect } from "react";
import {
	Navbar,
	Collapse,
	Typography,
	IconButton,
	List,
	ListItem,
	Button,
} from "@material-tailwind/react";
import {
	ChevronDownIcon,
	Bars3Icon,
	XMarkIcon,
} from "@heroicons/react/24/outline";

import iChatGPT from "../../assets/images/navigation/ichatgpt.png";
import iLanguage from "../../assets/images/navigation/ilanguage.png";
import iSport from "../../assets/images/navigation/isports.svg";
import iMusic from "../../assets/images/navigation/imusic.png";
import iImage from "../../assets/images/navigation/iimage.png";
import iVideo from "../../assets/images/navigation/ivideo.png";
import NavListMenu from "./NavList";

import { ReactComponent as Logo } from "../../assets/images/logo.svg";

const navListMenuItems = [
	{
		title: "iBharatBol",
		description: "Dummy for iBharath",
		icon: iChatGPT,
		link: "/bharatbol",
	},
	{
		title: "iImage",
		description: "Dummy for iImage",
		icon: iImage,
		link: "/image",
	},
	{
		title: "iSports",
		description: "Dummy for iSports",
		icon: iSport,
		link: "/sports",
	},
	{
		title: "iLanguage",
		description: "Dummy for iLanguage",
		icon: iLanguage,
		link: "/language",
	},
	{
		title: "iVideo",
		description: "Dummy for iVideo",
		icon: iVideo,
		link: "/video",
	},
	{
		title: "iMusic",
		icon: iMusic,
		description: "Nostalgia Comes Alive!",
		link: "/music",
	},
	// {
	// 	title: "iEducation",
	// 	description: "Dummy for iEducation",
	// 	icon: iMusic,
	// },
	// {
	// 	title: "iScript",
	// 	description: "Dummy for iScript",
	// 	icon: iMusic,
	// },
];

const companyListMenuItems = [
	{
		title: "About Us",
		description: "Dummy for about us",
		icon: iChatGPT,
		link: "/about",
	},
	{
		title: "Career",
		description: "Dummy for career",
		icon: iImage,
		link: "/career",
	},
	{
		title: "News",
		description: "Dummy for news",
		icon: iSport,
		link: "/news",
	},
	{
		title: "Blogs",
		description: "Dummy for blogs",
		icon: iLanguage,
		link: "/blogs",
	},
	{
		title: "Contact Us",
		description: "Dummy for contact us",
		icon: iVideo,
		link: "/contact",
	},
];

function NavList() {
	return (
		<List className='mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 border-slate-100'>
			<Typography
				as='a'
				href='/'
				variant='small'
				className='font-medium'
			>
				<ListItem className='flex items-center gap-2 py-2 pr-4 text-white font-plexmedium'>
					Home
				</ListItem>
			</Typography>
			<NavListMenu
				navListMenuItems={navListMenuItems}
				name='Research'
			/>
			<NavListMenu
				navListMenuItems={navListMenuItems}
				name='Products'
			/>
			<NavListMenu
				navListMenuItems={companyListMenuItems}
				name='Company'
			/>
			<Typography
				as='a'
				href='/about'
				variant='small'
				className='font-medium'
			>
				<ListItem className='flex items-center gap-2 py-2 pr-4 text-ibodygrey font-plexmedium'>
					Pricing
				</ListItem>
			</Typography>
			<div class='rounded-none beta-btn ml-8 p-[0.125rem]'>
				<div class='bg-black backdrop-blur-sm p-[0.5rem]'>
					<div class='font-plexmedium text-white text-xs'>Beta Site</div>
				</div>
			</div>
		</List>
	);
}

export function MegaMenuWithHover() {
	const [openNav, setOpenNav] = useState(false);
	const [isScroll, setIsScroll] = useState(false);

	useEffect(() => {
		window.addEventListener(
			"resize",
			() => window.innerWidth >= 960 && setOpenNav(false)
		);

		window.addEventListener("scroll", () => {
			setIsScroll(window.scrollY >= 240 ? true : false);
		});
	}, []);

	return (
		<Navbar
			className={`max-w-screen-3xl z-20	border-0 rounded-none ${
				isScroll ? "bg-scroll backdrop-blur-sm" : "bg-black backdrop-blur-sm"
			} fixed`}
		>
			<div className='flex items-center justify-around '>
				<Typography
					as='a'
					href='/'
					variant='h6'
					className='mr-4 cursor-pointer py-1.5 lg:ml-2'
				>
					<Logo
						alt='logo'
						width='100%'
					/>
				</Typography>
				<div className='hidden lg:block'>
					<NavList />
				</div>
				<IconButton
					variant='text'
					color='blue-gray'
					className='lg:hidden'
					onClick={() => setOpenNav(!openNav)}
				>
					{openNav ? (
						<XMarkIcon
							className='h-6 w-6'
							strokeWidth={2}
						/>
					) : (
						<Bars3Icon
							className='h-6 w-6'
							strokeWidth={2}
						/>
					)}
				</IconButton>
			</div>
			<Collapse open={openNav}>
				<NavList />
			</Collapse>
		</Navbar>
	);
}
