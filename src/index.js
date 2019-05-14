import React from 'react';
import {render} from 'react-dom';
import App from './components/app/app';
import {settings, questions} from "./mocks/mocks";

const init = () => {
  render(<App settings={settings} questions={questions}/>, document.querySelector(`.main`));
};

init();
