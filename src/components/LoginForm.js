
import React from 'react';
import PropTypes from 'prop-types';
import {  useUsers } from '../hooks/store';
import UserCard from './UserCard';

function LoginForm ({ redirectTarget }) {
  const users = useUsers();

  return (
    <div className="mt-4 p-2 flex items-center">
      <div className="w-1/5"></div>
      <div className="w-3/5">
        <div className="flex justify-center mb-2">
        <div>
            <h2 className="text-3xl">Log In To Continue</h2>
          </div>
        </div>
        {Array.isArray(users) && users.map(user => <UserCard key={user.id} { ...user} redirectTarget={redirectTarget} />)}
      </div>
      <div className="w-1/5"></div>
    </div>
  );
}

LoginForm.propTypes = {
  redirectTarget: PropTypes.string
};

export default LoginForm;