import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import { useActions, useCurrentUser, useLoginState } from "../hooks/store";
import { _saveQuestionAnswer } from "../_DATA";

function QuestionCard ({ id, optionOne, optionTwo, answers }) {
	const optionOneAnswers = answers.filter(answer => answer.choice === "optionOne").length;
	const optionTwoAnswers = answers.length - optionOneAnswers;

	const { voteQuestion } = useActions();
	const currentUserId = useCurrentUser();
	const loginState = useLoginState();
	const history = useHistory();

	const handleVote = (event) => {
		const answer = event.target.value;
		_saveQuestionAnswer({ authedUser: currentUserId, qid: id, answer }).then(
			() => {
				voteQuestion({ id, choice: answer, userId: currentUserId });
			}).catch(
			(err) => {
				console.log("err", err);
			}
		);
	};
	const getUsersVote = () => {
		const usersAnswer = answers.find(answer => answer.userId === currentUserId);
		if (!usersAnswer) {
			return "";
		}

		return usersAnswer.choice;
	};


	const handleDetailsClick = (id) => {
		history.push(`/questions/${id}`);
	};

	return (
		<div className="card lg:card-side bordered mb-4">
			<div className="card-body">
				<div className="flex justify-center">
					<h2 className="card-title" onClick={() => handleDetailsClick(id)}>Would you rather...?</h2> 
				</div>
				<div className="grid grid-cols-2 gap-4">
					<div className="shadow stats">
						<div className="stat">
							<div className="stat-title">{ optionOne }</div> 
							<div className="stat-value">{ optionOneAnswers }</div> 
							{getUsersVote() === "optionOne" && <div className="stat-desc">You choosed this.</div>}
						</div>
					</div>
					<div className="shadow stats">
						<div className="stat">
							<div className="stat-title">{ optionTwo }</div> 
							<div className="stat-value">{ optionTwoAnswers }</div> 
							{getUsersVote() === "optionTwo" && <div className="stat-desc">You choosed this.</div>}
						</div>
					</div>

				</div>
				{loginState && <div className="card-actions flex justify-center">
					<button className="btn btn-outline btn-primary" value="optionOne" onClick={handleVote}>{ optionOne }</button>
					<button className="btn btn-outline btn-secondary" value="optionTwo" onClick={handleVote}>{ optionTwo }</button>
				</div>}
			</div>
		</div>
	);
}

QuestionCard.propTypes = {
	id: PropTypes.string,
	optionOne: PropTypes.string,
	optionTwo: PropTypes.string,
	answers: PropTypes.array
};

export default QuestionCard;