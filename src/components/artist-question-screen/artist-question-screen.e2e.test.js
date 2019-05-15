import React from 'react';
import {shallow} from 'enzyme';
import ArtistQuestionScreen from "./artist-question-screen";
import {mockArtist} from "../../mocks/mocks";

it(`When user answers artist question form is not change`, () => {
  const handlerChange = jest.fn();

  const artistQuestion = shallow(<ArtistQuestionScreen
    question={mockArtist}
    onAnswer={handlerChange}
  />);

  const form = artistQuestion.find(`.game__artist`);
  form.simulate(`change`, {preventDefault() {}});
  expect(handlerChange).toHaveBeenCalledTimes(1);
});


