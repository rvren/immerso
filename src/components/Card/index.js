import {
	Card,
	CardHeader,
	CardBody,
	Typography,
} from "@material-tailwind/react";

export default function ImmersoCard({ label, image }) {
	return (
		<Card
			shadow={false}
			className='relative grid h-[20rem] w-full max-w-[20rem] items-end justify-center overflow-hidden text-center rounded-none m-8 hover:scale-150 hover:z-10 cursor-pointer transition-all transition delay-50 duration-300 ease-in-out'
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
