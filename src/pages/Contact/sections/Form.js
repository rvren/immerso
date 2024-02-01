import React, { useState, useRef } from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import emailjs from "@emailjs/browser";
import { EMAIL_JS } from "../../../utils/Constants";
import Section from "../../../components/Section";
import { Card, Input, Typography } from "@material-tailwind/react";
import Button from "../../../components/Button";

export default function Form() {
	const form = useRef();
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		message: "",
	});
	const [isSent, setIsSent] = useState(false);

	const handleInput = (field, value) => {
		const tempData = { ...formData };
		tempData[field] = value;
		setFormData(tempData);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				EMAIL_JS.SERVICE_ID,
				EMAIL_JS.TEMPLATE_ID,
				form.current,
				EMAIL_JS.P_KEY
			)
			.then(
				(result) => {
					setIsSent(true);
					setTimeout(() => setIsSent(false), 10000);
					console.log(result.text);
				},
				(error) => {
					console.error(error.text);
				}
			);
	};

	return (
		<Section className='bg-[#040819] backdrop-blur-3xl h-[90vh]'>
			<div className='relative top-36 flex flex-row gap-24'>
				<div className='lg:basis-1/2 md:basis-1 flex justify-center'>
					<div class='grid grid-cols-12 p-8 lg:max-w-[40rem] md:max-w-[30rem] sm:max-w-[20rem]'>
						<div class='col-span-12'>
							<div className='w-full font-plexmedium flex flex-col items-start justify-center'>
								<div className='font-plexmedium text-white'>Address </div>
								<div className='flex flex-row mt-4'>
									<div>
										{React.createElement(MapPinIcon, {
											strokeWidth: 1,
											className: "h-6 text-white mr-2 mt-1",
										})}
									</div>
									<div className='text-ibodygrey'>
										Immerso AIIP Limited, <br />
										Second Floor, 18-20 North Quay, <br />
										Douglas, Isle of Man IM1 4LE.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='lg:basis-1/2 md:basis-1'>
					<Card
						color='transparent'
						shadow={false}
					>
						<Typography
							variant='h4'
							color='white'
							className='font-manropemedium'
						>
							Contact Us
						</Typography>
						<form
							className='mt-8 mb-2 lg:max-w-[40rem] md:max-w-[30rem] sm:max-w-[20rem]'
							onSubmit={handleSubmit}
							ref={form}
						>
							<div class='grid grid-cols-12 gap-8'>
								<div class='col-span-6'>
									<Typography
										variant='h6'
										color='white'
										className='-mb-3 font-manropemedium'
									>
										First Name
									</Typography>
									<Input
										size='lg'
										name='firstName'
										placeholder='Enter your first name'
										value={formData?.firstName}
										onChange={(e) => handleInput("firstName", e.target.value)}
										variant='static'
										className='!border-t-white focus:!border-t-white text-white'
										labelProps={{
											className: "before:content-none after:content-none",
										}}
									/>
								</div>
								<div class='col-span-6'>
									<Typography
										variant='h6'
										color='white'
										className='-mb-3 font-manropemedium'
									>
										Last Name
									</Typography>
									<Input
										size='lg'
										placeholder='Enter your last name'
										variant='static'
										name='lastName'
										value={formData?.lastName}
										onChange={(e) => handleInput("lastName", e.target.value)}
										className='!border-t-white focus:!border-t-white text-white'
										labelProps={{
											className: "before:content-none after:content-none",
										}}
									/>
								</div>
								<div class='col-span-12'>
									<Typography
										variant='h6'
										color='white'
										className='-mb-3 font-manropemedium'
									>
										Email
									</Typography>
									<Input
										size='lg'
										placeholder='Enter your email'
										variant='static'
										type='email'
										name='Email'
										value={formData?.email}
										onChange={(e) => handleInput("email", e.target.value)}
										className='!border-t-white focus:!border-t-white text-white'
										labelProps={{
											className: "before:content-none after:content-none",
										}}
									/>
								</div>
								<div class='col-span-12'>
									<Typography
										variant='h6'
										color='white'
										className='-mb-3 font-manropemedium'
									>
										Phone Number
									</Typography>
									<Input
										size='lg'
										placeholder='Enter your phone number'
										variant='static'
										type='number'
										name='phone'
										value={formData?.phone}
										onChange={(e) => handleInput("phone", e.target.value)}
										className='!border-t-white focus:!border-t-white text-white'
										labelProps={{
											className: "before:content-none after:content-none",
										}}
									/>
								</div>
								<div class='col-span-12'>
									<Typography
										variant='h6'
										color='white'
										className='-mb-3 font-manropemedium'
									>
										Message
									</Typography>
									<Input
										size='lg'
										placeholder='Enter your message'
										variant='static'
										name='message'
										value={formData?.message}
										onChange={(e) => handleInput("message", e.target.value)}
										className='!border-t-white focus:!border-t-white text-white'
										labelProps={{
											className: "before:content-none after:content-none",
										}}
									/>
								</div>
							</div>
						</form>
					</Card>
					<Button
						variant='gradient'
						text='Submit'
						onClick={handleSubmit}
					/>
					{isSent && (
						<p className='text-igreen mt-8 font-manropebold'>
							Thanks for reaching out. We’ll be in touch soon
						</p>
					)}
				</div>
			</div>
		</Section>
	);
}
