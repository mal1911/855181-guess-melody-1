import React from 'react';
import renderer from 'react-test-renderer';
import ErrorScreen from './error-screen';
import {settings} from '../../mocks/mocks';

it(`ErrorScreen correctly renders`, () => {
  const tree = renderer
    .create(<ErrorScreen mistakes={settings.errorCount} />).toJSON();
  expect(tree).toMatchSnapshot();
});
