/* eslint-disable no-undef */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Cover from './index';

configure({ adapter: new Adapter() });

const image = 'https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/3c/a4/90/3ca4901d-b744-411d-246e-02f78aebf8bb/093624892984.jpg/500x500bb.png';
const rankNum = 2;

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Cover thumbnail={image} rank={rankNum} />);
});

describe('AlbumDetails -> Cover component', () => {
  it('Should render image correctly', () => {
    const imageSrc = wrapper.find('.album-image').prop('src');

    expect(imageSrc).toEqual(image);
  });

  it('Should render ranking correctly', () => {
    const rank = wrapper.find('.album-ranking').text();

    expect(rank).toEqual(rankNum.toString());
  });

  it('Should not render ranking component if not ranking data', () => {
    wrapper.setProps({ rank: null });
    const rank = wrapper.find('.album-ranking');

    expect(rank).toEqual({});
  });
});
