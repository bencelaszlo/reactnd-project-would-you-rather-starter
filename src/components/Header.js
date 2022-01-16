import React from 'react';

import { useActions, useCurrentUser, useLoginState, useUsers  } from "../hooks/store";
import * as paths from '../paths';
import HeaderNavButton from './HeaderNavButton';

function Header () {
  const loginState = useLoginState();
  const currentUserId = useCurrentUser();
  const users = useUsers();
  const { logoutCurrentUser } = useActions();

  const currentUser = users.find(user => user.id === currentUserId);

  const handleLogOut = () => logoutCurrentUser();;

  return (
        <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
        <div className="flex-1 px-2 mx-2">
            <span className="text-lg font-bold">Would you rather...?</span>
        </div>
        <div className="flex-none hidden px-2 mx-2 lg:flex">
            <span>{ (loginState && currentUser) && `Welcome ${currentUser.name}!` }</span>
            <div className="flex items-stretch">
                <div className="btn-group">
                    <HeaderNavButton path={paths.ROOT}>Questions</HeaderNavButton>
                    <HeaderNavButton path={paths.NEW_QUESTION}>New Question</HeaderNavButton>
                    <HeaderNavButton path={paths.LEADERBOARD}>Leaderboard</HeaderNavButton>
                    { loginState &&
                      <button className="btn btn-primary" onClick={handleLogOut}>Log Out</button>
                    }
                    { !loginState &&
                      <HeaderNavButton path={paths.LOGIN}>Log In</HeaderNavButton>
                    }
                </div>
            </div>
        </div>
        <div className="flex-none">
            <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            </button>
        </div>
        </div>
  );
}

export default Header;
