import { MegaMenuWithHover } from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
	return (
		<div className='scroll-smooth	'>
			<MegaMenuWithHover />
			<Home />
			<Footer />
		</div>
	);
}

export default App;
