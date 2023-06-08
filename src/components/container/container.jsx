import React from 'react';
// import PropTypes from 'prop-types';
import { ContainerHome } from 'pages/home/home.styled';

const Container = ({ children }) => {
  return <ContainerHome>{children}</ContainerHome>;
};

// Container.propTypes = {
//   children: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.node),
//     PropTypes.node,
//   ]).isRequired,
// };

export default Container;