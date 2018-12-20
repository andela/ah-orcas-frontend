import React from 'react';
import { shallow } from 'enzyme';
import { NavBarComponent, UnAuthed, AuthedNoNewArticle, AuthedNewArticle, FooterComponent } from '../App';

function setup() {
  const props = {};

  const enzymeWrapperNavBar = shallow(<NavBarComponent {...props} />);
  const enzymeWrapperUnAuthed = shallow(<UnAuthed {...props} />);
  const enzymeWrapperAuthedNoNewArticle = shallow(<AuthedNoNewArticle {...props} />);
  const enzymeWrapperAuthedNewArticle = shallow(<AuthedNewArticle {...props} />);
  const enzymeWrapperFooter = shallow(<FooterComponent {...props} />);

  return {
    props,
    enzymeWrapperNavBar,
    enzymeWrapperUnAuthed,
    enzymeWrapperAuthedNoNewArticle,
    enzymeWrapperAuthedNewArticle,
    enzymeWrapperFooter,
  };
}

describe('navbar component', () => {
  localStorage.setItem('user', '{"email": "john@jake.jake", "username": "john", "token": "token"}');
  it('render elements in navbar without crashing', () => {
    const { enzymeWrapperNavBar } = setup();
    expect(enzymeWrapperNavBar.find('div').length).toBe(4);
  });
});

describe('unauthed component', () => {
  it('render elements in unauthed without crashing', () => {
    const { enzymeWrapperUnAuthed } = setup();
    expect(enzymeWrapperUnAuthed.find('ul').length).toBe(1);
    expect(enzymeWrapperUnAuthed.find('a').length).toBe(3);
  });
});

describe('AuthedNoNewArticle component', () => {
  it('render elements in AuthedNoNewArticle without crashing', () => {
    const { enzymeWrapperAuthedNoNewArticle } = setup();
    expect(enzymeWrapperAuthedNoNewArticle.find('ul').length).toBe(1);
    expect(enzymeWrapperAuthedNoNewArticle.find('a').length).toBe(2);
  });
});

describe('AuthedNewArticle component', () => {
  it('render elements in AuthedNewArticle without crashing', () => {
    const { enzymeWrapperAuthedNewArticle } = setup();
    expect(enzymeWrapperAuthedNewArticle.find('ul').length).toBe(1);
    expect(enzymeWrapperAuthedNewArticle.find('a').length).toBe(3);
  });
});

describe('Footer component', () => {
  it('render elements in FooterComponent without crashing', () => {
    const { enzymeWrapperFooter } = setup();
    expect(enzymeWrapperFooter.find('div').length).toBe(1);
    expect(enzymeWrapperFooter.find('span').length).toBe(1);
  });
});
