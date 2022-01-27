function questions(state = [], action) {
	switch (action.type) {
	case "SET_QUESTIONS":
		return action.questions ? action.questions : state;
	case "ADD_QUESTION":
		return [
			{
				id: action.id,
				optionOne: action.optionOne,
				optionTwo: action.optionTwo,
				userId: action.userId,
				creationDate: new Date(),
				answers: []
			},
			...state,
		];
	case "VOTE_QUESTION":
		if (action.choice !== "optionOne" && action.choice !== "optionTwo") {
			return state;
		}

		return state.reduce((prev, current) => {
			if (current.id === action.id) {
				const answersWithoutUsersOne = current.answers.filter(answer => answer.userId !== action.userId);
				current.answers = [...answersWithoutUsersOne, { id: action.id, choice: action.choice, userId: action.userId }];
			}

			return [...prev, current];
		}, []);
	default:
		return state;
	}
}

export default questions;