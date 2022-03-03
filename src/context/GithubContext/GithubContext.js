import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
import { Navigate } from "react-router-dom";
const GithubContext = createContext();

const API_URL = process.env.REACT_APP_GITHUB_URL;
const Github_Token = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
	const initalState = {
		users: [],
		user: {},
		repos: [],
		loading: false,
	};

	const [state, dispatch] = useReducer(githubReducer, initalState);

	const setLoading = () => {
		dispatch({
			type: "SET_LOADING",
		});
	};
	const setClear = () => {
		dispatch({
			type: "CLEAR",
		});
	};

	//Get single user profile
	const fetchUser = async (login) => {
		try {
			setLoading();
			const response = await fetch(`${API_URL}/users/${login}`, {
				headers: {
					Authorization: `token ${Github_Token}`,
				},
			});

			const data = await response.json();
			dispatch({
				type: "GET_USER",
				payload: data,
			});
		} catch (error) {
			<Navigate to="/notfound" />;
		}
	};

	//Get single user Repos
	const fetchRepos = async (login) => {
		try {
			setLoading();
			const params = new URLSearchParams({
				sort: "created",
				per_page: 10,
			});
			const response = await fetch(
				`${API_URL}/users/${login}/repos?${params}`,
				{
					headers: {
						Authorization: `token ${Github_Token}`,
					},
				}
			);

			const data = await response.json();
			dispatch({
				type: "GET_REPOS",
				payload: data,
			});
		} catch (error) {
			<Navigate to="/notfound" />;
		}
	};

	return (
		<GithubContext.Provider
			value={{
				...state,
				dispatch,

				setClear,
				fetchUser,
				fetchRepos,
			}}
		>
			{children}
		</GithubContext.Provider>
	);
};

export default GithubContext;
