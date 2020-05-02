/* eslint-disable no-undef */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AlbumsList from './index';

configure({ adapter: new Adapter() });

const albums = [{
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
}, {
  artist: 'Mariah Carey',
  category: 'Pop',
  id: '1440654168',
  link: 'https://music.apple.com/us/album/charmbracelet/1440654168?uo=2',
  name: 'Charmbracelet',
  price: '$5.99',
  rank: 5,
  releaseDate: 'December 2, 2002',
  rights: { label: '℗ 2002 The Island Def Jam Music Group' },
  thumbSmall: 'https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/eb/42/49/eb4249d3-3999-19d6-081f-cd7c390bf89b/00044006346724.rgb.jpg/55x55bb.png',
  thumbnail: 'https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/eb/42/49/eb4249d3-3999-19d6-081f-cd7c390bf89b/00044006346724.rgb.jpg/500x500bb.png'
}];

let wrapper;
beforeEach(() => {
  wrapper = shallow(<AlbumsList isFavoritesList {...{ albums }} />);
});

describe('AlbumsList component', () => {
  it('Should render all passed album items', () => {
    const albumItems = wrapper.find('.list').children();

    expect(albumItems).toHaveLength(albums.length);
  });

  it('Should render message if no albums exist', () => {
    wrapper.setProps({ albums: [] });
    const altMessage = wrapper.find('.altMessage').find('p').text();

    expect(altMessage).toEqual('No Albums Found...');
  });
});
