import React from 'react';
import {shallow} from 'enzyme';
import WelcomeScreen from './welcome-screen';
import {settings} from "../../mocks/mocks";

it(`Simulating button click`, () => {
  const handlerClick = jest.fn();

  const welcomeScreen = shallow(<WelcomeScreen
    gameTime={settings.gameTime}
    errorCount={settings.errorCount}
    onClick={handlerClick}
  />);

  const startButton = welcomeScreen.find(`.welcome__button`);
  startButton.simulate(`click`, {preventDefault() {}});
  expect(handlerClick).toHaveBeenCalledTimes(1);
});

