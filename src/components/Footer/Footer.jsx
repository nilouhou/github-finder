import React from "react";

const Footer = () => {
	const time = new Date().getFullYear();
	return (
		<footer className="p-3 text-center bg-neutral text-neutral-content justify-center">
			<p>&copy; {time}</p>
		</footer>
	);
};

export default Footer;
