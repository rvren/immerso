import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Products from "../pages/Products";

export const routes = [
	{
		path: "/",
		element: <App component={<Home />} />,
	},
	{
		path: "/about",
		element: <App component={<About />} />,
	},
	{
		path: "/contact",
		element: <App component={<Contact />} />,
	},
	{
		path: "/products",
		element: <App component={<Products />} />,
	},
];
