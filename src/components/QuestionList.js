import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import { useCurrentUser, useQuestions, useQuestionFilter } from "../hooks/store";
import { setQuestionFilter } from "../store/actions";
import QuestionCard from "./QuestionCard";

function QuestionList () {
	const questions = useQuestions();
	const currentUserId = useCurrentUser();
	const questionFilter = useQuestionFilter();
	const dispatch = useDispatch();

	const sortQuestions = (a, b) => (b.creationDate - a.creationDate);

	const filteredQuestions = useCallback(() => {
		switch (questionFilter) {
		case "all":
			return questions.sort(sortQuestions);
		case "answered":
			return questions.filter(question => question.answers.some(answer => answer.userId === currentUserId)).sort(sortQuestions);
		case "unanswered":
			return questions.filter(question => question.answers.every(answer => answer.userId !== currentUserId)).sort(sortQuestions);
		default:
			return questions.sort(sortQuestions);
		}
	}, [currentUserId, questionFilter, questions]);

	const hasQuestion =  Array.isArray(filteredQuestions()) && filteredQuestions().length;

	const handleFilter = (event) => dispatch(setQuestionFilter(event.target.value));
  
	return (
		<div className="mt-4 p-2">
			<div className="btn-group">
				<button className={"btn btn-outline btn-lg" + (questionFilter === "all" ? " btn-active" : "")} value="all" onClick={handleFilter}>All</button>
				<button className={"btn btn-outline btn-lg" + (questionFilter === "answered" ? " btn-active" : "")} value="answered" onClick={handleFilter}>Answered</button>
				<button className={"btn btn-outline btn-lg" + (questionFilter === "unanswered" ? " btn-active" : "")} value="unanswered" onClick={handleFilter}>Unanswered</button>
			</div>
			{ !hasQuestion && <h2>There are no questions yet.</h2> }
			{Array.isArray(filteredQuestions()) && filteredQuestions().map(question => <QuestionCard
				key={question.id}
				{...question}
			>
			</QuestionCard>)}
		</div>
	);
}

export default QuestionList;