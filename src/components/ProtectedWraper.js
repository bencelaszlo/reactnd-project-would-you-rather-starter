import React from "react";
import PropTypes from "prop-types";

import { useLoginState } from "../hooks/store";
import LoginForm from "./LoginForm";

function ProtectedWrapper({ children, redirectTarget }) {
	const loginState = useLoginState();
	return ( loginState ? <React.Fragment>{ children }</React.Fragment> : <LoginForm redirectTarget={redirectTarget} />);
}

export default ProtectedWrapper;

ProtectedWrapper.propTypes = {
	children: PropTypes.element.isRequired,
	redirectTarget: PropTypes.string.isRequired
};