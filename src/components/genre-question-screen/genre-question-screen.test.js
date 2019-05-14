import React from 'react';
import renderer from 'react-test-renderer';
import GenreQuestionScreen from "./genre-question-screen";
import {questions} from "../../mocks/mocks";

it(`GenreQuestionScreen correctly renders`, () => {
  const handlerClick = jest.fn();
  const tree = renderer
    .create(<GenreQuestionScreen
      question={questions[0]}
      onAnswer={handlerClick}
    />).toJSON();
  expect(tree).toMatchSnapshot();
});
