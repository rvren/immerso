import {
	Card,
	CardHeader,
	CardBody,
	Typography,
} from "@material-tailwind/react";
import { ReactComponent as Logo } from "../../assets/images/next.svg";

export default function BlogCard({ label, image, isHoverable }) {
	return (
		<Card
			shadow={false}
			className={`relative grid h-[40rem] w-[35rem] items-end justify-center overflow-hidden text-center rounded-none mt-6 mb-0 ml-2 mr-2 hover:-translate-y-6 hover:z-1000 cursor-pointer transition-all transition delay-50 duration-300 ease-in-out bg-transparent`}
		>
			<CardHeader
				floated={false}
				shadow={false}
				color='transparent'
				className='absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-top  transition-all transition delay-100 duration-300 ease-in-out'
				style={{ backgroundImage: `url(${image})` }}
			></CardHeader>
			<CardBody className='backdrop-blur-2xl w-[35rem] h-[8rem]'>
				<div className='w-4/5 h-[5rem] flex justify-start items-center align-middle'>
					<Typography
						color='white'
						className='text-3xl	text-left font-plexmedium '
					>
						{label}
					</Typography>
				</div>
				<div className='w-1/5'>
					<Logo className='absolute h-[3rem] top-10 right-2' />
				</div>
			</CardBody>
		</Card>
	);
}
