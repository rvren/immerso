import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
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

import iChatGPT from "../../assets/images/navigation/ichatgpt.svg";
import iLanguage from "../../assets/images/navigation/ilanguage.svg";
import iSport from "../../assets/images/navigation/isports.svg";
import iMusic from "../../assets/images/navigation/imusic.svg";
import iImage from "../../assets/images/navigation/iimage.svg";
import iVideo from "../../assets/images/navigation/ivideo.svg";
import NavListMenu from "./NavList";

import { ReactComponent as Logo } from "../../assets/images/logo.svg";

const navListMenuItems = [
	{
		title: "iBharathBol",
		navTitle: "iBharathBol - Coming Soon",
		description: "Voices of India, Echoing Unity.",
		icon: iChatGPT,
		link: "",
	},
	{
		title: "iImage",
		navTitle: "iImage - Coming Soon",
		description: "Where Every Pixel Tells a Story.",
		icon: iImage,
		link: "",
	},
	{
		title: "iSports",
		navTitle: "iSports - Coming Soon",
		description: "Igniting Passion, Uniting Fans.",
		icon: iSport,
		link: "",
	},
	{
		title: "iLanguage",
		navTitle: "iLanguage - Coming Soon",
		description: "Bridging Cultures, Connecting Worlds.",
		icon: iLanguage,
		link: "",
	},
	{
		title: "iVideo",
		navTitle: "iVideo - Coming Soon",
		description: "Capturing Moments, Crafting Memories.",
		icon: iVideo,
		link: "",
	},
	{
		title: "iMusic",
		navTitle: "iMusic - Coming Soon",
		icon: iMusic,
		description: "Nostalgia Comes Alive!",
		link: "",
	},
];

const companyListMenuItems = [
	{
		title: "About Us",
		navTitle: "About Us - Coming Soon",
		description: "Dummy for about us",
		icon: iChatGPT,
		link: "",
	},
	{
		title: "Career",
		navTitle: "Career - Coming Soon",
		description: "Dummy for career",
		icon: iImage,
		link: "",
	},
	{
		title: "News",
		navTitle: "News - Coming Soon",
		description: "Dummy for news",
		icon: iSport,
		link: "",
	},
	{
		title: "Blogs",
		navTitle: "Blogs - Coming Soon",
		description: "Dummy for blogs",
		icon: iLanguage,
		link: "",
	},
	{
		title: "Contact Us",
		navTitle: "Contact Us",
		description: "Connect with us!",
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
				<ListItem className='flex items-center gap-2 py-2 pr-4 text-ibodygrey font-plexmedium'>
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
				href=''
				variant='small'
				className='font-medium'
			>
				<ListItem className='flex items-center gap-2 py-2 pr-4 text-ibodygrey font-plexmedium'>
					Pricing
				</ListItem>
			</Typography>
			<div className='immerso-gradient ml-8 font-plexbold text-white text-xs flex justify-center align-items-center h-[2rem] p-2'>
				Beta Site
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
