import React from "react";
import { useParams } from "react-router-dom";

import { useActions, useCurrentUser, useQuestions, useUsers } from "../hooks/store";
import NotFoundPage from "./NotFoundPage";

function QuestionDetails () {
	const { id } = useParams();
	const questions = useQuestions();
	const question = questions.find(question => question.id === id);
	const users = useUsers();
	const { voteQuestion } = useActions();
	const currentUserId = useCurrentUser();

	if (!question) {
		<NotFoundPage />;
	}

	const optionOneAnswers = question.answers.filter(answer => answer.choice === "optionOne").length;
	const optionTwoAnswers = question.answers.length - optionOneAnswers;
	const optionOnePercentage = optionOneAnswers / question.answers.length * 100;
	const optionTwoPercentage = optionTwoAnswers / question.answers.length * 100;
	const user = users.find(user => user.id === question.userId);

	const nanSafePercentage = (number) => {
		return Number.isFinite(number) ? `${number}%` : "";
	};

	const handleVote = (event) => voteQuestion({ id, choice: event.target.value, userId: currentUserId });
  
	const getUsersVote = () => {
		const usersAnswer = question.answers.find(answer => answer.userId === currentUserId);
		if (!usersAnswer) {
			return "";
		}

		return usersAnswer.choice;
	};

	return (
		<div className="card lg:card-side bordered mb-4">
			<div className="card-body">
				<div className="flex justify-center">
					<div>
						<h2 className="card-title">Would you rather...?</h2>
						<h3>Asked by: <img src={ user.avatarUrl } alt="user profile"/> { user.name }</h3>
					</div>
				</div>
				{!!question.answers.length && <div className="grid grid-cols-2 gap-4">
					<div className="shadow stats">
						<div className="stat">
							<div className="stat-title">{ question.optionOne }</div> 
							<div className="stat-value">{ nanSafePercentage(optionOnePercentage) }</div>
							<div className="stat-desc">
								<span>{ optionOneAnswers } user(s) choosed this option.</span>
								{getUsersVote() === "optionOne" && <span><br/>You choosed this option.</span>}
							</div>
						</div>
					</div>
					<div className="shadow stats">
						<div className="stat">
							<div className="stat-title">{ question.optionTwo }</div> 
							<div className="stat-value">{ nanSafePercentage(optionTwoPercentage) }</div>
							<div className="start-desc">
								<span>{ optionTwoAnswers } user(s) choosed this option.</span>
								{getUsersVote() === "optionTwo" && <span><br/>You choosed this option.</span>}
							</div>
						</div>
					</div>
				</div>}
				<div className="card-actions flex justify-center">
					<button className="btn btn-outline btn-primary" value="optionOne" onClick={handleVote}>{ question.optionOne }</button>
					<button className="btn btn-outline btn-secondary" value="optionTwo" onClick={handleVote}>{ question.optionTwo }</button>
				</div>
			</div>
		</div>
	);
}

export default QuestionDetails;