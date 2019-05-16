import React from 'react';
import {mount} from 'enzyme';
import GenreQuestionScreen from "./genre-question-screen";
import {mockGenre} from "../../mocks/mocks";

it(`When user answers genre question form is not sent`, () => {
  const onAnswer = jest.fn();
  const genreQuestion = mount(<GenreQuestionScreen
    onAnswer={onAnswer}
    question={mockGenre}
  />);

  const form = genreQuestion.find(`form`);
  const formSendPrevention = jest.fn();
  form.simulate(`submit`, {
    preventDefault: formSendPrevention,
  });

  expect(onAnswer).toHaveBeenCalledTimes(1);
  expect(formSendPrevention).toHaveBeenCalledTimes(1);
});
