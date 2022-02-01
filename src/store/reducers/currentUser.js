function currentUser (state = null, action) {
	switch (action.type) {
	case "LOGIN_CURRENT_USER":
		return action.id;
	case "LOGOUT_CURRENT_USER":
		return null;
	default:
		return state;
	}
}

export default currentUser;
