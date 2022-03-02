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
		loading: false,
	};

	const [state, dispatch] = useReducer(githubReducer, initalState);

	const serachUsers = async (query) => {
		setLoading();
		const params = new URLSearchParams({
			q: query,
		});
		const response = await fetch(`${API_URL}/search/users?${params}`, {
			headers: {
				Authorization: `token ${Github_Token}`,
			},
		});

		const { items } = await response.json();
		dispatch({
			type: "GET_USERS",
			payload: items,
		});
	};

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

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				loading: state.loading,
				serachUsers,
				setClear,
				fetchUser,
				user: state.user,
			}}
		>
			{children}
		</GithubContext.Provider>
	);
};

export default GithubContext;
