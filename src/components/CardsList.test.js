import React from 'react';
import { shallow } from 'enzyme';
import CardsList from './CardsList';
const filteredRobots = [{
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz'
  }]

it('renders without crashing', () => { // test name
  expect(shallow(<CardsList robots={filteredRobots}/>)).toMatchSnapshot();
});