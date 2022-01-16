import React from 'react';
// import { useHistory } from "react-router-dom";

import { useLoginState } from "../hooks/store";
import LoginForm from './LoginForm';

function ProtectedWrapper({ children, redirectTarget }) {
    const loginState = useLoginState();
    // const history = useHistory();

    /* if (!loginState) {
        history.push('/login');
    } */

    // console.log('');

    /* const redirectToLogin = () => {
        history.push('/login');
        return null;
    }; */

    // return ( loginState ?  <React.Fragment>{ children }</React.Fragment> : redirectToLogin());
    return ( loginState ? <React.Fragment>{ children }</React.Fragment> : <LoginForm redirectTarget={redirectTarget} />);
}

export default ProtectedWrapper;
