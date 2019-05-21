import React from 'react';
import {render} from 'react-dom';
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from './components/app/app';
import {settings, questions} from "./mocks/mocks";
import {reducer} from "./reducer";

const init = () => {
  const store = createStore(reducer);
  render(<Provider store={store}>
    <App gameTime={settings.gameTime} maxMistakes={settings.errorCount} questions={questions}/>
  </Provider>,
  document.querySelector(`.main`));
};

init();
