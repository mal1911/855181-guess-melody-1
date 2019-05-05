import React from 'react';
import PropTypes from 'prop-types';
import WelcomeScreen from '../welcome-screen/welcome-screen';

const App = (props) => {

  const startGameHandler = (evt) => {
    evt.preventDefault();
  };

  return <WelcomeScreen
    time={props.gameTime}
    errorCount={props.errorCount}
    onClick = {startGameHandler}
  />;
};

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
};

export default App;
