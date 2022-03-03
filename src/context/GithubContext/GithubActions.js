const API_URL = process.env.REACT_APP_GITHUB_URL;
const Github_Token = process.env.REACT_APP_GITHUB_TOKEN;

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
