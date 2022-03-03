import { Navigate } from "react-router-dom";
const API_URL = process.env.REACT_APP_GITHUB_URL;
const Github_Token = process.env.REACT_APP_GITHUB_TOKEN;

//Get all users
export const serachUsers = async (query) => {
	const params = new URLSearchParams({
		q: query,
	});
	const response = await fetch(`${API_URL}/search/users?${params}`, {
		headers: {
			Authorization: `token ${Github_Token}`,
		},
	});

	const { items } = await response.json();
	return items;
};

//Get single user profile
export const fetchUser = async (login) => {
	try {
		const response = await fetch(`${API_URL}/users/${login}`, {
			headers: {
				Authorization: `token ${Github_Token}`,
			},
		});

		const data = await response.json();
		return data;
	} catch (error) {
		<Navigate to="/notfound" />;
	}
};

//Get single user Repos
export const fetchRepos = async (login) => {
	try {
		const params = new URLSearchParams({
			sort: "created",
			per_page: 10,
		});
		const response = await fetch(`${API_URL}/users/${login}/repos?${params}`, {
			headers: {
				Authorization: `token ${Github_Token}`,
			},
		});

		const data = await response.json();
		return data;
	} catch (error) {
		<Navigate to="/notfound" />;
	}
};
