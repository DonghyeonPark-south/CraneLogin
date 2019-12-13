import 'react-native';
import React from 'react';
import Login from '../Login';

import { shallow, render } from 'enzyme';


describe('rendering test', () => {
  const wrapper = shallow(<Login />);
  it('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  })
});