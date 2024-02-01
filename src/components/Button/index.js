import { Button as TailButton } from "@material-tailwind/react";

export default function Button({ variant = "gradient", text, onClick }) {
	return (
		<TailButton
			variant={variant}
			onClick={onClick}
			className='bg-gradient-to-l from-iviolet to-igreen rounded-none normal-case text-1xl font-manropemedium max-w-max mt-8 tracking-widest animate-slidein [--slidein-delay:700ms] opacity-0 '
		>
			{text}
		</TailButton>
	);
}
