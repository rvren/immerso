import React, { useState, useEffect } from "react";
import {
	Navbar,
	Collapse,
	Typography,
	IconButton,
	List,
	ListItem,
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
} from "@material-tailwind/react";
import { motion, useScroll } from "framer-motion";
import {
	ChevronDownIcon,
	Bars3Icon,
	XMarkIcon,
} from "@heroicons/react/24/outline";

import iChatGPT from "../../assets/images/navigation/ichatgpt.png";
import iLanguage from "../../assets/images/navigation/ilanguage.png";
import iSport from "../../assets/images/navigation/isports.png";
import iMusic from "../../assets/images/navigation/imusic.png";
import iImage from "../../assets/images/navigation/iimage.png";
import iVideo from "../../assets/images/navigation/ivideo.png";
import NavListMenu from "./NavList";

import { ReactComponent as Logo } from "../../assets/images/logo.svg";

const navListMenuItems = [
	{
		title: "iBharath ChatGPT",
		description: "Dummy for iBharath",
		icon: iChatGPT,
	},
	{
		title: "iImage",
		description: "Dummy for iImage",
		icon: iImage,
	},
	{
		title: "iSports",
		description: "Dummy for iSports",
		icon: iSport,
	},
	{
		title: "iLanguage",
		description: "Dummy for iLanguage",
		icon: iLanguage,
	},
	{
		title: "iVideo",
		description: "Dummy for iVideo",
		icon: iVideo,
	},
	{
		title: "iMusic",
		icon: iMusic,
		description: "Nostalgia Comes Alive!",
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
	},
	{
		title: "Career",
		description: "Dummy for career",
		icon: iImage,
	},
	{
		title: "News",
		description: "Dummy for news",
		icon: iSport,
	},
	{
		title: "Blogs",
		description: "Dummy for blogs",
		icon: iLanguage,
	},
	{
		title: "Contact Us",
		description: "Dummy for contact us",
		icon: iVideo,
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
				<ListItem className='flex items-center gap-2 py-2 pr-4 text-white font-plexmedium'>
					Pricing
				</ListItem>
			</Typography>
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
