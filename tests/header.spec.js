import React from 'react';
import Header from '../src/components/Header/header';
import { shallow } from 'enzyme';
import '../tests/setup';
import MenuBar from '../src/components/Header/MenuBar/menu-bar';

describe('the header renders as expected', () => {

    const wrapper = shallow(<Header />);

    it('renders without crashing', () => expect(wrapper.length).toBe(1));
    
    it('should contain a menubar', () => {
        const menuBar = wrapper.find(MenuBar);

        expect(menuBar.length).toBe(1);
    });
});