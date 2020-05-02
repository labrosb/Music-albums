/* eslint-disable no-undef */
import React from 'react';
import { configure, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Loading from './index';

configure({ adapter: new Adapter() });

describe('Loading page component', () => {
  it('Should match snapshot', () => {
    const wrapper = shallow(<Loading header="My Header" />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
