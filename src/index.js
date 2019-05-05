import React from 'react';
import {render} from 'react-dom';
import {GAME_TIME, ERROR_COUNT} from "./constants";
import App from './components/app/app';

const init = () => {
  const settings = {
    gameTime: GAME_TIME,
    errorCount: ERROR_COUNT,
  };

  render(<App errorCount={settings.errorCount} gameTime={settings.gameTime}/>, document.querySelector(`.main`));
};

init();
