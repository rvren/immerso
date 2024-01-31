import React, { useState } from "react";
import {
	Collapse,
	Typography,
	ListItem,
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function NavListMenu({ navListMenuItems, name }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState(navListMenuItems[0]);

	const renderItems = navListMenuItems.map((item, key) => (
		<a
			href={item?.title}
			key={key}
		>
			<MenuItem
				className=' items-end gap-3 rounded-lg hover:bg-transparent'
				onMouseEnter={() => setSelectedProduct(item)}
				onMouseLeave={() => setSelectedProduct(navListMenuItems[0])}
			>
				<div>
					<Typography
						as='a'
						href={item?.link}
						className='flex items-center text-3xl text-ibodygrey transition-all transition delay-50 duration-200 ease-in-out hover:text-white font-plexlight hover:font-plexmedium '
					>
						{item?.title}
					</Typography>
				</div>
			</MenuItem>
		</a>
	));

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
							className='flex items-center gap-2 py-2 pr-4 font-medium text-ibodygrey font-plexmedium'
							selected={isMenuOpen || isMobileMenuOpen}
							onClick={() => setIsMobileMenuOpen((cur) => !cur)}
						>
							{name}
							<ChevronDownIcon
								strokeWidth={2.5}
								className={`hidden h-3 w-3 lg:block ${
									isMenuOpen ? "rotate-180" : ""
								}`}
							/>
							<ChevronDownIcon
								strokeWidth={2.5}
								className={`block h-3 w-3 lg:hidden ${
									isMobileMenuOpen ? "rotate-180" : ""
								}`}
							/>
						</ListItem>
					</Typography>
				</MenuHandler>
				<MenuList className='hidden w-screen lg:block font-plexmedium bg-menu backdrop-blur-md border-0	p-12 pb-36'>
					<ul className='grid grid-cols-4 justify-center outline-none outline-0'>
						<div className='col-span-2 mx-auto'>
							<MenuItem className='w-[35rem] max-h-[4rem]'>
								<img
									className='transition-all transition delay-100 duration-200 ease-in-out object-cover aspect-video mx-24'
									src={selectedProduct?.icon}
									alt={selectedProduct?.title}
								/>
								{selectedProduct?.title && (
									<div className='text-white text-lg font-medium mt-4 mx-24'>
										{selectedProduct?.title}
									</div>
								)}
								{selectedProduct?.description && (
									<div className='text-white text-sm font-light font-plexlight mx-24'>
										{selectedProduct?.description}
									</div>
								)}
							</MenuItem>
						</div>
						<div className='col-span-2 border-l border-igreen h-[13rem] border-dashed pl-24 pt-6 mt-24'>
							<div className='grid grid-cols-2 gap-x-8'>{renderItems}</div>
						</div>
					</ul>
				</MenuList>
			</Menu>
			<div className='block lg:hidden'>
				<Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
			</div>
		</React.Fragment>
	);
}
