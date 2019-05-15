import React from 'react';
import renderer from 'react-test-renderer';
import ArtistQuestionScreen from "./artist-question-screen";
import {mockArtist} from "../../mocks/mocks";

it(`ArtistQuestionScreen correctly renders`, () => {
  const handlerClick = jest.fn();
  const tree = renderer
    .create(<ArtistQuestionScreen
      question={mockArtist}
      onAnswer={handlerClick}
    />).toJSON();
  expect(tree).toMatchSnapshot();
});
