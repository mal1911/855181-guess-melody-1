import React from 'react';
import {shallow} from 'enzyme';
import AudioPlayer from './audio-player';
import {mockArtist} from "../../mocks/mocks";

const mockEvent = {preventDefault() {}};

it(`Simulating AudioPlayer play`, () => {
  const handlerClick = jest.fn();
  const audioPlayer = shallow(<AudioPlayer
    isPlaying={false}
    onPlayButtonClick={handlerClick}
    src={mockArtist.song.src}
  />);
  const button = audioPlayer.find(`.track__button.track__button--play`);
  button.simulate(`click`, mockEvent);
  expect(handlerClick).toHaveBeenCalledTimes(1);
  expect(audioPlayer.state(`isPlaying`)).toBe(true);
});

it(`Simulating AudioPlayer pause`, () => {
  const handlerClick = jest.fn();
  const audioPlayer = shallow(<AudioPlayer
    isPlaying={true}
    onPlayButtonClick={handlerClick}
    src={mockArtist.song.src}
  />);
  const button = audioPlayer.find(`.track__button.track__button--pause`);
  button.simulate(`click`, mockEvent);
  expect(handlerClick).toHaveBeenCalledTimes(1);
  expect(audioPlayer.state(`isPlaying`)).toBe(false);
});
