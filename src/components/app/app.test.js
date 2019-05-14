import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';
import {questions, settings} from "../../mocks/mocks";

it(`App correctly renders`, () => {
  const tree = renderer
    .create(<App settings={settings} questions={questions}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
