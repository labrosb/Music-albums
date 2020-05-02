/* eslint-disable no-undef */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Header from './index';

configure({ adapter: new Adapter() });

jest.mock('react-router-dom', () => ({
  useHistory: jest.fn()
}));

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Header title="My Header" active="top100" />);
});

describe('Header component', () => {
  it('Renders Header Title passed via props correctly', () => {
    const title = wrapper.find('.title-label').text();

    expect(title).toEqual('My Header');
  });

  it('Has active (selected) route element', () => {
    const route = wrapper.find('.route').first();

    expect((route).hasClass('active')).toBe(true);
  });

  it('Matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
