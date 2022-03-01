const AlertReducer = (state, action) => {
	switch (action.type) {
		case "ADD_ALERT":
			return;
			action.payload;
		case "REMOVE_ALERT":
			return null;
		default:
			return state;
	}
};

export default AlertReducer;
