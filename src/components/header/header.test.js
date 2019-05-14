import React from 'react';
import renderer from 'react-test-renderer';
import Header from './header';

it(`Header correctly renders`, () => {
  const tree = renderer
    .create(<Header/>).toJSON();
  expect(tree).toMatchSnapshot();
});
