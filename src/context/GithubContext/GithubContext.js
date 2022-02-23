import { createContext, useState } from "react";
const GithubContext = createContext();

const API_URL = process.env.REACT_APP_GITHUB_URL;
const Github_Token = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchUsers = async () => {
		const response = await fetch(`${API_URL}/users`, {
			headers: {
				Authorization: `token ${Github_Token}`,
			},
		});

		const data = await response.json();
		setUsers(data);
		setLoading(false);
	};

	return (
		<GithubProvider values={{ users, loading, fetchUsers }}>
			{children}
		</GithubProvider>
	);
};

export default GithubContext;
