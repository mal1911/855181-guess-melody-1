import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen';
import {settings} from "../../mocks/mocks";

it(`WelcomeScreen correctly renders`, () => {
  const handlerClick = jest.fn();
  const tree = renderer
    .create(<WelcomeScreen
      gameTime={settings.gameTime}
      errorCount={settings.errorCount}
      onClick={handlerClick}
    />).toJSON();
  expect(tree).toMatchSnapshot();
});
