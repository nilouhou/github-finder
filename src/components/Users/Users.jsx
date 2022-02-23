import React, { useEffect, useState } from "react";
import UserItem from "../UserItem/UserItem";

const API_URL = process.env.REACT_APP_GITHUB_URL;

const Users = () => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchUsers = async () => {
		const response = await fetch(`${API_URL}/users`, {
			headers: {
				Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
			},
		});

		const data = await response.json();
		setUsers(data);
		setLoading(false);
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	return (
		<div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
			{loading ? (
				<p>LOADING</p>
			) : (
				users.map((user) => <UserItem key={user.id} user={user} />)
			)}
		</div>
	);
};

export default Users;
