import React from 'react';
import PropTypes from 'prop-types';

const ErrorScreen = (props) => (
  <div className="game__mistakes">
    {Array(props.mistakes).fill(null).map((it, index) => <div key={index} className="wrong"/>)}
  </div>
);

ErrorScreen.propTypes = {
  mistakes: PropTypes.number.isRequired,
};

export default ErrorScreen;
