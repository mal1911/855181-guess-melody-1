import React from 'react';
import renderer from 'react-test-renderer';
import ArtistQuestionScreen from "./artist-question-screen";
import {mockArtist, settings} from "../../mocks/mocks";

it(`ArtistQuestionScreen correctly renders`, () => {
  const handlerClick = jest.fn();
  const tree = renderer
    .create(<ArtistQuestionScreen
      question={mockArtist}
      mistakes={settings.errorCount}
      onAnswer={handlerClick}
    />).toJSON();
  expect(tree).toMatchSnapshot();
});
