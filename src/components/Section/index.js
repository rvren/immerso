import React, { useRef } from "react";
import { useIsVisible } from "../../utils/hooks/useIsVisible";

export default function Section(props) {
	const ref1 = useRef();
	const isVisible = useIsVisible(ref1);
	return (
		<section
			ref={ref1}
			className={`transition-opacity ease-in duration-700 ${
				isVisible ? "opacity-100" : "opacity-0"
			}  w-full text-white`}
			{...props}
		>
			{props?.children}
		</section>
	);
}
