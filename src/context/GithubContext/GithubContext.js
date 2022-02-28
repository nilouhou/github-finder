import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
const GithubContext = createContext();

const API_URL = process.env.REACT_APP_GITHUB_URL;
const Github_Token = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
	const initalState = {
		users: [],
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

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				loading: state.loading,
				serachUsers,
				setClear,
			}}
		>
			{children}
		</GithubContext.Provider>
	);
};

export default GithubContext;
