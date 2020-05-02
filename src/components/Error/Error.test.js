/* eslint-disable no-undef */
import React from 'react';
import { configure, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Error from './index';

configure({ adapter: new Adapter() });

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Error header="My Header" message="Error message" />);
});

describe('Error page component', () => {
  it('Should render error message passed via props correctly', () => {
    const errorMessage = wrapper.find('.error-text').text();

    expect(errorMessage).toEqual('Error message');
  });

  it('Should match snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
