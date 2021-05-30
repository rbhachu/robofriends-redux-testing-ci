import React from 'react';
import { shallow } from 'enzyme';
import Cards from './Cards';

it('renders without crashing', () => { // test name
  expect(shallow(<Cards />)).toMatchSnapshot();
});