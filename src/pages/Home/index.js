import React from "react";
import Hero from "./sections/Hero";
import Products from "./sections/Products";
import About from "./sections/About";
import Blog from "./sections/Blog";
import News from "./sections/News";
import Closing from "../../components/Closing";

export default function Home() {
	return (
		<>
			<Hero />
			<Products />
			<About />
			<Blog />
			<News />
			<Closing
				text='Level Up your '
				subText='Rumble Experience!'
				ctaText='Start your free trial now!!'
			/>
		</>
	);
}
