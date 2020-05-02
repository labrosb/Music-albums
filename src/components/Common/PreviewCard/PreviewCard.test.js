/* eslint-disable no-undef */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import PreviewCard from './index';

configure({ adapter: new Adapter() });

jest.mock('react-router-dom', () => ({
  useHistory: jest.fn()
}));

const album = {
  artist: 'Kenny Chesney',
  category: 'Country',
  id: '1502163294',
  link: 'https://music.apple.com/us/album/here-and-now/1502163294?uo=2',
  name: 'Here and Now',
  price: '$10.99',
  rank: 1,
  releaseDate: 'May 1, 2020',
  rights: { label: '℗ 2020 Blue Chair Records, LLC under exclusive license to Warner Music Nashville LLC.' },
  thumbSmall: 'https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/3c/a4/90/3ca4901d-b744-411d-246e-02f78aebf8bb/093624892984.jpg/55x55bb.png',
  thumbnail: 'https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/3c/a4/90/3ca4901d-b744-411d-246e-02f78aebf8bb/093624892984.jpg/500x500bb.png'
};

let wrapper;
beforeEach(() => {
  wrapper = shallow(<PreviewCard isFavorite {...{ album }} />);
});

describe('PreviewCard component', () => {
  it('Should render image correctly', () => {
    const imageSrc = wrapper.find('.card-image').prop('src');

    expect(imageSrc).toEqual(album.thumbnail);
  });

  it('Should render ranking correctly', () => {
    const rank = wrapper.find('.card-rank').text();

    expect(rank).toEqual(album.rank.toString());
  });

  it('Should render album name correctly', () => {
    const name = wrapper.find('.card-detail').first().text();

    expect(name).toEqual(album.name);
  });

  it('Should render artist name correctly', () => {
    const artist = wrapper.find('.card-detail').at(1).text();

    expect(artist).toEqual(album.artist);
  });

  it('Should have active favorite button', () => {
    const favorite = wrapper.find('.card-favorite');

    expect((favorite).hasClass('active')).toBe(true);
  });

  it('Should match snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
