/* eslint-disable no-undef */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilterBar from './index';

configure({ adapter: new Adapter() });

const data = [
  {
    id: 1,
    name: 'Here and Now'
  },
  {
    id: 2,
    name: 'Graves Into Gardens (Deluxe) [Live]'
  },
  {
    id: 3,
    name: 'Choirmaster'
  }
];

let wrapper;

beforeEach(() => {
  wrapper = shallow(
    <FilterBar
      placeholder="Search Titles..."
      onFiltered={() => null}
      {...{ data }}
    />
  );
});

describe('FilterBar component', () => {
  it('Should render placeholder correctly', () => {
    const placeholder = wrapper.find('.filter-input').prop('placeholder');

    expect(placeholder).toEqual('Search Titles...');
  });

  it('Should filter correctly on typing', () => {
    let filtered;
    const typeValue = 'choirma';
    const expectedMatch = 'Choirmaster';
    const filteredCallback = results => { filtered = results; };

    wrapper.setProps({ onFiltered: filteredCallback });

    const input = wrapper.find('.filter-input').first();
    input.simulate('change', {
      target: { value: typeValue } // incomplete but correct album name
    });
    const resultsObjName = filtered[0].name;

    expect(resultsObjName).toEqual(expectedMatch);
  });
});
