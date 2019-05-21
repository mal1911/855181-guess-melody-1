import React from 'react';
import {shallow} from 'enzyme';
import ArtistQuestionScreen from './artist-question-screen';
import {settings} from '../../mocks/mocks';

const mock = {
  type: `artist`,
  song: {
    artist: ``,
    src: ``
  },
  answers: [
    {
      artist: `one`,
      picture: `pic-one`,
    },
    {
      artist: `two`,
      picture: `pic-two`,
    },
    {
      artist: `three`,
      picture: `pic-three`,
    },
  ],
};

const mockEvent = {
  preventDefault() {
  }
};

it(`When user answers artist question form is not change`, () => {
  const handlerChange = jest.fn();

  const artistQuestion = shallow(<ArtistQuestionScreen
    mistakes={settings.errorCount}
    question={mock}
    onAnswer={handlerChange}
  />);

  const answerInputs = artistQuestion.find(`input`);
  const answerOne = answerInputs.at(0);
  const answerTwo = answerInputs.at(1);
  const answerThree = answerInputs.at(2);

  answerOne.simulate(`click`, mockEvent);
  answerTwo.simulate(`click`, mockEvent);
  answerThree.simulate(`click`, mockEvent);
  expect(handlerChange).toHaveBeenCalledTimes(3);

  expect(handlerChange).toHaveBeenNthCalledWith(1, {
    artist: `one`,
    picture: `pic-one`,
  });

  expect(handlerChange).toHaveBeenNthCalledWith(2, {
    artist: `two`,
    picture: `pic-two`,
  });

  expect(handlerChange).toHaveBeenNthCalledWith(3, {
    artist: `three`,
    picture: `pic-three`,
  });
});


