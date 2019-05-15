import React from 'react';
import renderer from 'react-test-renderer';
import AudioPlayer from './audio-player';
import {questions} from "../../mocks/mocks";

it(`AudioPlayer correctly renders`, () => {
  const handlerClick = jest.fn();
  const tree = renderer
    .create(<AudioPlayer
      isPlaying={false}
      onPlayButtonClick={handlerClick}
      src={questions[1].song.src}
    />).toJSON();
  expect(tree).toMatchSnapshot();
});

