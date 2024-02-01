import React from "react";
import Hero from "./sections/Hero";
import Form from "./sections/Form";
import Closing from "../../components/Closing";

export default function Contact() {
	return (
		<>
			<Hero />
			<Form />
			<Closing
				subText='Forging the Future'
				ctaText='Start your free trial now!!'
			/>
		</>
	);
}
