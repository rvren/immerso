import { Button as TailButton } from "@material-tailwind/react";

export default function Button({ variant = "gradient", text, callBack }) {
	return (
		<TailButton
			variant={variant}
			onClick={callBack}
			className='bg-gradient-to-l from-iviolet to-igreen rounded-none normal-case text-1xl font-manropemedium '
		>
			{text}
		</TailButton>
	);
}
