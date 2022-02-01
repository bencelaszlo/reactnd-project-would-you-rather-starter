import { useEffect, useCallback } from "react";
import { _getQuestions, _getUsers } from "../_DATA";
import { useActions } from "./store";
import logo from "../static/user_0.png";

const useUsersFetch = async () => {
	const { setUsers } = useActions();

	const fetchUsers = useCallback(() => {
		_getUsers().then(users => {
			const userValues = Object.values(users);
			const mappedUsers = userValues.map(user => ({
				id: user.id,
				name: user.name,
				avatarUrl: logo,
				creationDate: new Date()
			}));
    
			setUsers(mappedUsers);
		});
	}, [setUsers]);

	useEffect(
		() => {
			fetchUsers();
		}, [fetchUsers]
	);
};

const useUserManager = () => {
	const { addUser, deleteUser } = useActions();

	const create = useCallback(
		(name) => {
			addUser(name);
		},
		[addUser]
	);

	const deleteById = useCallback(
		(id) => {
			deleteUser(id);
		},
		[deleteUser]
	);

	return { create, deleteById };
};

const useQuestionsFetch = async () => {
	const { setQuestions } = useActions();
  
	const fetchQuestions = useCallback(() => {
		_getQuestions().then(questions => {
			const questionValues = Object.values(questions);
			const mappedQuestions = questionValues.map(question => ({
				id: question.id,
				optionOne: question.optionOne.text,
				optionTwo: question.optionTwo.text,
				userId: question.author,
				creationDate: new Date(question.timestamp),
				answers: []
			}));

			setQuestions(mappedQuestions);
		});
	}, [setQuestions]);
  
	useEffect(
		() => {
			fetchQuestions();
		}, [fetchQuestions]
	);
};

export { useUsersFetch, useUserManager, useQuestionsFetch };
