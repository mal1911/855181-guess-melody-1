import React from 'react';
import renderer from 'react-test-renderer';
import ArtistQuestionScreen from "./artist-question-screen";
import {questions} from "../../mocks/mocks";

it(`ArtistQuestionScreen correctly renders`, () => {
  const handlerClick = jest.fn();
  const tree = renderer
    .create(<ArtistQuestionScreen
      question={questions[1]}
      onAnswer={handlerClick}
    />).toJSON();
  expect(tree).toMatchSnapshot();
});
