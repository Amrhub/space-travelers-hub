import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ to }) => (
  <a className="ex-link" href={to} rel="noopener noreferrer" target="_blank">
    Read More
  </a>
);

Link.propTypes = {
  to: PropTypes.string.isRequired,
};

export default Link;
