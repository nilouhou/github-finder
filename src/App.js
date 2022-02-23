import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import About from "./components/pages/About";

function App() {
	return (
		<Router>
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/notfound" element={<NotFound />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>

			<main>content</main>
			<Footer />
		</Router>
	);
}

export default App;
