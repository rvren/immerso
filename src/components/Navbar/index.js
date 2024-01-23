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
import {
	ChevronDownIcon,
	Bars3Icon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import {
	Bars4Icon,
	GlobeAmericasIcon,
	PhoneIcon,
	SquaresPlusIcon,
	SunIcon,
	UserGroupIcon,
} from "@heroicons/react/24/solid";

import { ReactComponent as Logo } from "../../assets/images/logo.svg";

const navListMenuItems = [
	{
		title: "iChatGPT",
		description: "Find the perfect solution for your needs.",
		icon: SquaresPlusIcon,
	},
	{
		title: "iLanguage",
		description: "Meet and learn about our dedication",
		icon: UserGroupIcon,
	},
	{
		title: "iMusic",
		description: "Find the perfect solution for your needs.",
		icon: Bars4Icon,
	},
	{
		title: "iSport",
		description: "Learn how we can help you achieve your goals.",
		icon: SunIcon,
	},
	{
		title: "iImage",
		description: "Reach out to us for assistance or inquiries",
		icon: GlobeAmericasIcon,
	},
	{
		title: "iVideo",
		description: "Find the perfect solution for your needs.",
		icon: PhoneIcon,
	},
];

function NavListMenu() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const renderItems = navListMenuItems.map(
		({ icon, title, description }, key) => (
			<a
				href={title}
				key={key}
			>
				<MenuItem className='flex items-center gap-3 rounded-lg'>
					<div className='flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 '>
						{React.createElement(icon, {
							strokeWidth: 2,
							className: "h-6 text-gray-900 w-6",
						})}
					</div>
					<div>
						<Typography
							variant='h6'
							color='blue-gray'
							className='flex items-center text-sm font-bold'
						>
							{title}
						</Typography>
						<Typography
							variant='paragraph'
							className='text-xs !font-medium text-blue-gray-500'
						>
							{description}
						</Typography>
					</div>
				</MenuItem>
			</a>
		)
	);

	return (
		<React.Fragment>
			<Menu
				open={isMenuOpen}
				handler={setIsMenuOpen}
				offset={{ mainAxis: 20 }}
				placement='bottom'
				allowHover={true}
			>
				<MenuHandler>
					<Typography
						as='div'
						variant='small'
						className='font-medium'
					>
						<ListItem
							className='flex items-center gap-2 py-2 pr-4 font-medium text-white font-plexmedium'
							selected={isMenuOpen || isMobileMenuOpen}
							onClick={() => setIsMobileMenuOpen((cur) => !cur)}
						>
							Products
							<ChevronDownIcon
								strokeWidth={2.5}
								className={`hidden h-3 w-3 transition-transform lg:block ${
									isMenuOpen ? "rotate-180" : ""
								}`}
							/>
							<ChevronDownIcon
								strokeWidth={2.5}
								className={`block h-3 w-3 transition-transform lg:hidden ${
									isMobileMenuOpen ? "rotate-180" : ""
								}`}
							/>
						</ListItem>
					</Typography>
				</MenuHandler>
				<MenuList className='hidden max-w-screen-xl rounded-xl lg:block font-plexmedium'>
					<ul className='grid grid-cols-1 gap-y-2 outline-none outline-0 '>
						{renderItems}
					</ul>
				</MenuList>
			</Menu>
			<div className='block lg:hidden'>
				<Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
			</div>
		</React.Fragment>
	);
}

function NavList() {
	return (
		<List className='mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1'>
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

			<NavListMenu />
			<Typography
				as='a'
				href='/about'
				variant='small'
				className='font-medium'
			>
				<ListItem className='flex items-center gap-2 py-2 pr-4 text-white font-plexmedium'>
					About Us
				</ListItem>
			</Typography>
			<Typography
				as='a'
				href='/blog'
				variant='small'
				className='font-medium'
			>
				<ListItem className='flex items-center gap-2 py-2 pr-4 text-white font-plexmedium'>
					Blog
				</ListItem>
			</Typography>
			<Typography
				as='a'
				href='connect'
				variant='small'
				className='font-medium'
			>
				<ListItem className='flex items-center gap-2 py-2 pr-4 text-white font-plexmedium'>
					Connect
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
			setIsScroll(window.scrollY >= 480 ? true : false);
			console.log("window.scrollY", window.scrollY);
		});
	}, []);
	console.log("window.scrollY", window.scrollY);
	return (
		<Navbar
			className={`max-w-screen-3xl z-10	border-0 rounded-none ${
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
