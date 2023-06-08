import React from 'react';
// import PropTypes from 'prop-types';
// import { MainHeader } from './Header.styled';

const Header = ({ children }) => {
  return <header>{children}</header>;
};

// Header.propTypes = {
//   children: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.node),
//     PropTypes.node,
//   ]).isRequired,
// };

export default Header;