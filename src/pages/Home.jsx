import React from "react";
import Users from "../components/Users/Users";
import Search from "../components/Search/Search";

const Home = () => {
	return (
		<div className="container text-center p-3">
			<Search />
			<Users />
		</div>
	);
};

export default Home;
