import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Nav = ({ title }) => {
	return (
		<nav className="navbar mb-12 shadow-lg text-neutral-content">
			<div className="container mx-auto">
				<div className="flex-none px-2 mx-auto">
					<Link to="/">
						<h1 className="text-lg font-bold align-middle">
							<FaGithub className="text-3xl inline pr-2" />
							{title}
						</h1>
					</Link>
				</div>
				<div className="felx-1 PX-2 MX-2">
					<ul className="flex jutify-end">
						<li>
							<Link to="/" className="btn btn-ghost btn-sm rounded-btn">
								Home
							</Link>
						</li>
						<li>
							<Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
								About
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

Nav.defaultPrps = {
	title: "Github Finder",
};

export default Nav;
