import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import GithubContext from "../context/GithubContext/GithubContext";

const User = () => {
	const { user, fetchUser } = useContext(GithubContext);
	const params = useParams();

	useEffect(() => {
		fetchUser(params.login);
	}, []);

	return <div>{user.login}</div>;
};

export default User;
