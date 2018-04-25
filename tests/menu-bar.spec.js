import React from 'react';
import MenuBar from '../src/menu-bar';
import { shallow } from 'enzyme';
import '../tests/setup';

it('renders without crashing', () => {
    const wrapper = shallow(<MenuBar />);

    expect(wrapper.length).toBe(1);
    
});

it('it contains 4x links', () => {
    const wrapper = shallow(<MenuBar/>);
    const menu = wrapper.find('ul');
 
    expect(menu.children().length).toEqual(4);
});