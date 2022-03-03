import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

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

	return (
		<GithubContext.Provider
			value={{
				...state,
				dispatch,
				setClear,
			}}
		>
			{children}
		</GithubContext.Provider>
	);
};

export default GithubContext;
