import React from "react";
import { useHistory } from "react-router-dom";

function NotFoundPage() {
	const history = useHistory();

	const handleGoBack = (event) => {
		history.push("/");
	};

	return (
		<div className="card shadow">
			<div className="card-body">
				<h1 className="card-title">404 - Page Not Found</h1>
				<button className="btn" onClick={handleGoBack}>Go Back To The Main page</button>
			</div>
		</div>);
}

export default NotFoundPage;