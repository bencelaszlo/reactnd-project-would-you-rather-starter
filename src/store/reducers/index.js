import { combineReducers } from "redux";

import users from "./users";
import currentUser from "./currentUser";
import questions from "./questions";
import questionFilter from "./questionFilter";

const app = combineReducers({
	users,
	currentUser,
	questions,
	questionFilter
});

export default app;
