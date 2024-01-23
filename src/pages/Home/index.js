import React from "react";
import Hero from "./sections/Hero";
import Products from "./sections/Products";
import About from "./sections/About";
import Blog from "./sections/Blog";

export default function Home() {
	return (
		<>
			<Hero />
			<Products />
			<About />
			<Blog />
		</>
	);
}
