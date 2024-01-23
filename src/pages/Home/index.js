import React from "react";
import Hero from "./sections/Hero";
import Offering from "./sections/Offering";
import Products from "./sections/Products";
import About from "./sections/About";
// import Hero from "./sections/Hero";

export default function Home() {
	return (
		<>
			<Hero />
			<Products />
			<Offering />
			<About />
		</>
	);
}
