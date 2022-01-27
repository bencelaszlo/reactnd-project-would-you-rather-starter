import React from "react";
import PropTypes from "prop-types";

import { useCurrentUser } from "../hooks/store";

function LeaderBoardCard ({ id, index, name, avatarUrl, questions, answers }) {
	const currentUserId = useCurrentUser();
	const isCurrentUser = id === currentUserId;

	return (
		<tr className={isCurrentUser ? "active" : ""}>
			<td>{ index }</td>
			<td>
				<div className="flex items-center space-x-3">
					<div className="avatar">
						<div className="w-12 h-12 mask mask-squircle">
							<img src={ avatarUrl } alt="user profile"/>
						</div>
					</div> 
					<div>
						<div className="font-bold">{ name } { isCurrentUser ? "(you)" : ""}</div> 
					</div>
				</div>
			</td> 
			<td>{ questions }</td>
			<td>{ answers }</td>
		</tr>
	);
}

LeaderBoardCard.propTypes = {
	id: PropTypes.string,
	index: PropTypes.number,
	name: PropTypes.string,
	avatarUrl: PropTypes.string,
	questions: PropTypes.number,
	answers: PropTypes.number
};

export default LeaderBoardCard;
