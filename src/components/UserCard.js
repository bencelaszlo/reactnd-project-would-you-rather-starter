import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useActions } from "../hooks/store";

function UserCard ({ id, name, redirectTarget }) {
	const { loginCurrentUser } = useActions();
	const history = useHistory();

	const handleLogin = () => {
		loginCurrentUser(id);
		history.push(redirectTarget);
	};

	return (
		<div className="card lg:card-side bordered mb-4">
			<div className="card-body">
				<div className="flex justify-center">
					<h2 className="card-title">{ name }</h2> 
				</div>
				<div className="card-actions flex justify-center">
					<button className="btn btn-outline btn-primary" onClick={handleLogin}>Log In</button>
				</div>
			</div>
		</div>
	);
}

UserCard.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	redirectTarget: PropTypes.string
};

export default UserCard;