
import * as actionTypes from "./action.types";

export const addUser = (name) => ({
	type: actionTypes.ADD_USER,
	name
});

export const deleteUser = (id) => ({
	type: actionTypes.DELETE_USER,
	id
});

export const loginCurrentUser = (id) => ({
	type: actionTypes.LOGIN_CURRENT_USER,
	id
});

export const logoutCurrentUser = () => ({
	type: actionTypes.LOGOUT_CURRENT_USER
});

export const addQuestion = ({ userId, optionOne, optionTwo }) => ({
	type: actionTypes.ADD_QUESTION,
	userId,
	optionOne,
	optionTwo
});

export const voteQuestion = ({ id, choice, userId }) => ({
	type: actionTypes.VOTE_QUESTION,
	id,
	choice,
	userId
});

export const setQuestionFilter = (filter) => ({
	type: actionTypes.SET_QUESTION_FILTER,
	filter
});

export const setQuestions = (questions) => ({
	type: actionTypes.SET_QUESTIONS,
	questions
});

export const setUsers = (users) => ({
	type: actionTypes.SET_USERS,
	users
});

