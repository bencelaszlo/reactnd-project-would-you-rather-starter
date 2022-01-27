
import React from "react";
import { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useActions, useCurrentUser } from "../hooks/store";
import { ROOT } from "../paths";
import { _saveQuestion } from "../_DATA";

function NewQuestion () {
	const currentUserId = useCurrentUser();
	const history = useHistory();
	const { addQuestion } = useActions();
	const [optionOne, setOptionOne] = useState("");
	const [optionTwo, setOptionTwo] = useState("");

	console.log("optionOne", optionOne);
	console.log("optionTwo", optionTwo);

	const handleQuestionSubmit = useCallback(
		(event) => {
			event.preventDefault();

			if (!optionOne.trim() || !optionTwo.trim()) {
				return;
			}

			// console.log("handleQuestionSubmit", { userId: currentUserId, optionOne, optionTwo });

			addQuestion({ userId: currentUserId, optionOne, optionTwo });
			_saveQuestion({ author: currentUserId, optionOne, optionTwo }).then(
				() => {
					console.log("okay");
					history.push(ROOT);
				}).catch((err) => console.log("err", err));
		},
		[addQuestion, currentUserId, history, optionOne, optionTwo]
	);
  
	const handleOptionOneChange = (event) => {
		setOptionOne(event.target.value);
	};

	const handleOptionTwoChange = (event) => {
		setOptionTwo(event.target.value);
	};

	const isVotingDisabled = () => optionOne.normalize() === optionTwo.normalize();

	return (
		<div className="card lg:card-side bordered">
			<div className="card-body">
				<div className="flex justify-center">
					<h2 className="card-title">Would you rather...?</h2> 
					<div className="form-control ml-2 mr-2">
						<form onSubmit={handleQuestionSubmit}>
							<input className="input input-bordered ml-4" placeholder="Choose this..." value={optionOne} onChange={handleOptionOneChange} />
							<input className="input input-bordered ml-4" placeholder="...or that?" value={optionTwo} onChange={handleOptionTwoChange} />
							<button type="submit" className="btn btn-outline btn-primary ml-2" disabled={isVotingDisabled()}>
                Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NewQuestion;
