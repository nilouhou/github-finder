import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import PropTypes from "prop-types";

const Nav = ({ title }) => {
	return (
		<nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
			<div className="container justify-between">
				<div className="px-2">
					<Link to="/">
						<h1 className="text-lg font-bold align-middle">
							<FaGithub className="text-3xl inline pr-2" />
							{title}
						</h1>
					</Link>
				</div>
				<div className="felx-1 px-2 mx-2">
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

Nav.defaultProps = {
	title: "Github Finder",
};

Nav.prototype = {
	title: PropTypes.string.isRequired,
};

export default Nav;
