const githubReducer = (state, action) => {
	switch (action.type) {
		case "GET_USERS":
			return {
				...state,
				users: action.payload,
				loading: false,
			};
		case "SET_LOADING":
			return {
				...state,
				loading: true,
			};
		case "GET_USER_REPOS":
			return {
				...state,
				user: action.payload.user,
				repos: action.payload.repos,
				loading: false,
			};
		case "CLEAR":
			return {
				...state,
				users: [],
			};

		default:
			return state;
	}
};

export default githubReducer;
