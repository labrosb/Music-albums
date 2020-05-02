/* eslint-disable no-undef */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Details from './index';

configure({ adapter: new Adapter() });

const albumData = {
  artist: 'Kenny Chesney',
  category: 'Country',
  id: '1502163294',
  link: 'https://music.apple.com/us/album/here-and-now/1502163294?uo=2',
  name: 'Here and Now',
  price: '$10.99',
  rank: 1,
  releaseDate: 'May 1, 2020',
  rights: '℗ 2020 Blue Chair Records, LLC under exclusive license to Warner Music Nashville LLC.',
  thumbnail: 'https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/3c/a4/90/3ca4901d-b744-411d-246e-02f78aebf8bb/093624892984.jpg/500x500bb.png'
};

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Details isFavorite {...{ albumData }} />);
});

describe('AlbumDetails -> Detais component', () => {
  it('Should render album name correctly', () => {
    const name = wrapper.find('.album-name').text();

    expect(name).toEqual(albumData.name);
  });

  it('Should render artist name correctly', () => {
    const artist = wrapper.find('.album-artist').text();

    expect(artist).toEqual(albumData.artist);
  });

  it('Should render album category correctly', () => {
    const category = wrapper.find('.album-detail').at(0).text();

    expect(category).toEqual(`Music: ${albumData.category}`);
  });

  it('Should render album release date correctly', () => {
    const date = wrapper.find('.album-detail').at(1).text();

    expect(date).toEqual(`Int.Release ${albumData.releaseDate}`);
  });

  it('Should render album price correctly', () => {
    const price = wrapper.find('.album-price').text();

    expect(price).toEqual(albumData.price);
  });

  it('Should render remove button if album is in favorites', () => {
    const buttonText = wrapper.find('.favorite-button').find('span').text();

    expect(buttonText).toEqual('Remove');
  });

  it('Should render add button if album is not in favorites', () => {
    wrapper.setProps({ isFavorite: false });
    const buttonText = wrapper.find('.favorite-button').find('span').text();

    expect(buttonText).toEqual('Add');
  });
});
