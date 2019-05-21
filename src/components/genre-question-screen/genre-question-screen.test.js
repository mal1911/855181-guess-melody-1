import React from 'react';
import renderer from 'react-test-renderer';
import GenreQuestionScreen from "./genre-question-screen";
import {mockGenre, settings} from "../../mocks/mocks";

it(`GenreQuestionScreen correctly renders`, () => {
  const handlerClick = jest.fn();
  const tree = renderer
    .create(<GenreQuestionScreen
      question={mockGenre}
      mistakes={settings.errorCount}
      onAnswer={handlerClick}
    />).toJSON();
  expect(tree).toMatchSnapshot();
});
