import { Navigate } from "react-router-dom";
import axios from "axios";

const API_URL = process.env.REACT_APP_GITHUB_URL;
const Github_Token = process.env.REACT_APP_GITHUB_TOKEN;

//creating instance from axios with specific header parameteres
const axiosGithub = axios.create({
	baseURL: API_URL,
	headers: { Authorization: `token ${Github_Token}` },
});

//Get all users
export const serachUsers = async (query) => {
	const params = new URLSearchParams({
		q: query,
	});
	const response = await axiosGithub.get(`/search/users?${params}`);

	return response.data.items;
};

// Get user and repos
export const getUserAndRepos = async (login) => {
	try {
		//combining two requests to one request
		const [user, repos] = await Promise.all([
			axiosGithub.get(`/users/${login}`),
			axiosGithub.get(`/users/${login}/repos`),
		]);

		return { user: user.data, repos: repos.data };
	} catch (error) {
		<Navigate to="/notfound" />;
	}
};

// //Get single user profile
// export const fetchUser = async (login) => {
// 	try {
// 		const response = await fetch(`${API_URL}/users/${login}`, {
// 			headers: {
// 				Authorization: `token ${Github_Token}`,
// 			},
// 		});

// 		const data = await response.json();
// 		return data;
// 	} catch (error) {
// 		<Navigate to="/notfound" />;
// 	}
// };

// //Get single user Repos
// export const fetchRepos = async (login) => {
// 	try {
// 		const params = new URLSearchParams({
// 			sort: "created",
// 			per_page: 10,
// 		});
// 		const response = await fetch(`${API_URL}/users/${login}/repos?${params}`, {
// 			headers: {
// 				Authorization: `token ${Github_Token}`,
// 			},
// 		});

// 		const data = await response.json();
// 		return data;
// 	} catch (error) {
// 		<Navigate to="/notfound" />;
// 	}
// };
