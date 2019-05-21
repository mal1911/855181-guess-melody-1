import React from 'react';
import renderer from 'react-test-renderer';
import Header from './header';
import {settings} from '../../mocks/mocks';

it(`Header correctly renders`, () => {
  const tree = renderer
    .create(<Header mistakes={settings.errorCount} />).toJSON();
  expect(tree).toMatchSnapshot();
});
