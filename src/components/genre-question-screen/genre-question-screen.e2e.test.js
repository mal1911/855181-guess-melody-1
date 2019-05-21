import React from 'react';
import {shallow} from 'enzyme';
import GenreQuestionScreen from './genre-question-screen';
import {settings} from '../../mocks/mocks';

const mock = {
  type: `genre`,
  genre: `rock`,
  answers: [
    {
      src: `path`,
      genre: `rock`,
    },
    {
      src: `path`,
      genre: `jazz`,
    },
    {
      src: `path`,
      genre: `jazz`,
    },
    {
      src: `path`,
      genre: `blues`,
    },
  ],
};

it(`When user answers genre question form is not sent`, () => {
  const onAnswer = jest.fn();
  const genreQuestion = shallow(<GenreQuestionScreen
    mistakes={settings.errorCount}
    onAnswer={onAnswer}
    question={mock}
  />);

  const form = genreQuestion.find(`form`);
  const formSendPrevention = jest.fn();
  form.simulate(`submit`, {
    preventDefault: formSendPrevention,
  });

  expect(onAnswer).toHaveBeenCalledTimes(1);
  expect(formSendPrevention).toHaveBeenCalledTimes(1);
});


it(`Rendered checkboxes are synchronized with state`, () => {
  const onAnswer = jest.fn();
  const genreQuestion = shallow(<GenreQuestionScreen
    mistakes={settings.errorCount}
    onAnswer={onAnswer}
    question={mock}
  />);

  expect(genreQuestion.state(`userAnswer`)).toEqual([false, false, false, false]);

  const inputs = genreQuestion.find(`input`);
  const inputOne = inputs.at(0);
  const inputTwo = inputs.at(1);

  inputOne.simulate(`change`);
  expect(genreQuestion.state(`userAnswer`)).toEqual([true, false, false, false]);

  inputOne.simulate(`change`);
  expect(genreQuestion.state(`userAnswer`)).toEqual([false, false, false, false]);

  inputTwo.simulate(`change`);
  expect(genreQuestion.state(`userAnswer`)).toEqual([false, true, false, false]);
});

it(`User answer passed to callback is consistent with internal component state`, () => {
  const onAnswer = jest.fn();
  const genreQuestion = shallow(<GenreQuestionScreen
    mistakes={settings.errorCount}
    onAnswer={onAnswer}
    question={mock}
  />);

  const form = genreQuestion.find(`form`);
  const inputTwo = genreQuestion.find(`input`).at(1);
  inputTwo.simulate(`change`);
  form.simulate(`submit`, {preventDefault() {}});

  expect(genreQuestion.state(`userAnswer`)).toEqual([false, true, false, false]);
  expect(onAnswer).toHaveBeenCalledTimes(1);
  expect(onAnswer).toHaveBeenNthCalledWith(1, [false, true, false, false]);
});
