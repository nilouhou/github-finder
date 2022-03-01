import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import { GithubProvider } from "./context/GithubContext/GithubContext";
import { AlertProvider } from "./context/Alert/AlertContext";

function App() {
	return (
		<GithubProvider>
			<AlertProvider>
				<Router>
					<div className="flex flex-col justify-between h-screen">
						<Nav />
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/about" element={<About />} />
							<Route path="/notfound" element={<NotFound />} />
							<Route path="/*" element={<NotFound />} />
						</Routes>

						<Footer />
					</div>
				</Router>
			</AlertProvider>
		</GithubProvider>
	);
}

export default App;
