import React, { useContext } from "react";
import GithubContext from "../../context/GithubContext/GithubContext";
import UserItem from "../UserItem/UserItem";
import Spinner from "../../assets/spinner.gif";

const Users = () => {
	const { users, loading } = useContext(GithubContext);

	return (
		<div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
			{loading ? (
				<img className="text-center" src={Spinner} alt="spinner" />
			) : (
				users.map((user) => <UserItem key={user.id} user={user} />)
			)}
		</div>
	);
};

export default Users;
