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

	const fetchUsers = async () => {
		setLoading();
		const response = await fetch(`${API_URL}/users`, {
			headers: {
				Authorization: `token ${Github_Token}`,
			},
		});

		const data = await response.json();
		dispatch({
			type: "GET_USERS",
			payload: data,
		});
	};

	const setLoading = () => {
		dispatch({
			type: "SET_LOADING",
		});
	};
	return (
		<GithubContext.Provider
			value={{ users: state.users, loading: state.loading, fetchUsers }}
		>
			{children}
		</GithubContext.Provider>
	);
};

export default GithubContext;
