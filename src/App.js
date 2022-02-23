import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<Router>
			<Nav />
			<main>content</main>
			<Footer />
		</Router>
	);
}

export default App;
