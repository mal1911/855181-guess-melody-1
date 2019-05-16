import React from 'react';
import renderer from 'react-test-renderer';
import AudioPlayer from './audio-player';
import {mockArtist} from "../../mocks/mocks";

it(`AudioPlayer correctly renders`, () => {
  const handlerClick = jest.fn();
  const tree = renderer
    .create(<AudioPlayer
      isPlaying={false}
      onPlayButtonClick={handlerClick}
      src={mockArtist.song.src}
    />).toJSON();
  expect(tree).toMatchSnapshot();
});
