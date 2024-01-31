import { MegaMenuWithHover } from "./components/Navbar";
import Footer from "./components/Footer";

function App({ component }) {
	return (
		<div className='scroll-smooth'>
			<MegaMenuWithHover />
			{component}
			<Footer />
		</div>
	);
}

export default App;
