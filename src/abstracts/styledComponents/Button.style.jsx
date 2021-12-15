/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ isRocketReserved, isMissionJoined, onClick }) => {
  const focusHandler = (e) => {
    e.target.classList.toggle('button--focus');
  };

  const hoverHandler = (e) => {
    e.target.classList.toggle('button--hover');
  };

  let style = {
    borderRadius: '4px',
    padding: '0.5rem',
    fontSize: '1.1rem',
    transition: 'transform 0.2s',
  };
  let text = '';

  if (isRocketReserved != null) {
    style = {
      ...style,
      backgroundColor: isRocketReserved ? 'transparent' : '#007bff',
      color: isRocketReserved ? '#9aa0a5' : '#fff',
      border: isRocketReserved ? '1px solid #9aa0a5' : '1px solid #007bff',
      alignSelf: 'flex-start',
      fontSize: '1.3rem',
      padding: '0.75rem',
    };
    text = isRocketReserved ? 'Cancel Reservation' : 'Reserve Rocket';
  } else {
    style = {
      ...style,
      backgroundColor: 'transparent',
      border: isMissionJoined ? '1px solid #de4250' : '1px solid #343a40',
      color: isMissionJoined ? '#de4250' : '#343a40',
    };
    text = isMissionJoined ? 'Leave Mission' : 'Join Mission';
  }

  return (
    <button
      type="button"
      onClick={onClick}
      style={style}
      onMouseOver={hoverHandler}
      onMouseLeave={hoverHandler}
      onFocus={focusHandler}
      onBlur={focusHandler}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  isRocketReserved: PropTypes.bool,
  isMissionJoined: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default Button;
