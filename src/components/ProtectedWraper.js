import React from "react";

import { useLoginState } from "../hooks/store";
import LoginForm from "./LoginForm";

function ProtectedWrapper({ children, redirectTarget }) {
	const loginState = useLoginState();
	return ( loginState ? <React.Fragment>{ children }</React.Fragment> : <LoginForm redirectTarget={redirectTarget} />);
}

export default ProtectedWrapper;
