import React from "react";
import Hero from "./sections/Hero";
import Closing from "../../components/Closing";

export default function Contact() {
	return (
		<>
			<Hero />
			<Closing
				subText='Forging the Future'
				ctaText='Start your free trial now!!'
			/>
		</>
	);
}
