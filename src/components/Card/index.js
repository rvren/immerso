import {
	Card,
	CardHeader,
	CardBody,
	Typography,
} from "@material-tailwind/react";
import React, { useRef } from "react";
import { useIsVisible } from "../../utils/hooks/useIsVisible";

export default function ImmersoCard({ label, image, isHoverable }) {
	const ref2 = useRef();
	const isVisible = useIsVisible(ref2);
	return (
		<Card
			shadow={false}
			ref={ref2}
			className={`transition-opacity ease-in duration-700 ${
				isVisible ? "opacity-100" : "opacity-0"
			} relative grid h-[25rem] w-full max-w-[25rem] items-end justify-center overflow-hidden text-center rounded-none mt-6 mb-0 ${
				isHoverable && "hover:scale-[1.2]"
			} transform-gpu hover:z-10 cursor-pointer transition-all transition delay-100 duration-300 ease-in-out bg-transparent hover:shadow-lg hover:shadow-inherit	`}
		>
			<CardHeader
				floated={false}
				shadow={false}
				color='transparent'
				className='absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center'
				style={{ backgroundImage: `url(${image})` }}
			>
				<div className='absolute inset-0 h-full w-full' />
			</CardHeader>
			<CardBody className='absolute backdrop-blur-2xl w-full'>
				<Typography
					variant='h4'
					color='white'
					className='font-medium leading-[1] text-center font-plexmedium'
				>
					{label}
				</Typography>
			</CardBody>
		</Card>
	);
}
