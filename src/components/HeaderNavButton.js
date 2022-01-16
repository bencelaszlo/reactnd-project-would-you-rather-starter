import React from 'react';
import { Link } from 'react-router-dom';
import { useIsActivePath } from '../hooks/useIsActivePath';
import PropTypes from 'prop-types';

const HeaderNavButton = ({ children, path }) => {
  const isActive = useIsActivePath(path);

  return (
    <button className={isActive ? 'btn btn-active' : 'btn'}>
      <Link to={path}>{children}</Link>
    </button>
  );
};

HeaderNavButton.propTypes = {
  filter: PropTypes.string,
  children: PropTypes.string,
  path: PropTypes.string
};

export default HeaderNavButton;
