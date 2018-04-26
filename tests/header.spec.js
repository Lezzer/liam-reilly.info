import React from 'react';
import Header from '../src/header';
import { shallow } from 'enzyme';
import '../tests/setup';
import MenuBar from '../src/menu-bar';

describe('the header renders as expected', () => {

    it('renders without crashing', () => {
        const wrapper = shallow(<Header />);

        expect(wrapper.length).toBe(1);
    });
    
    it('should contain a menubar', () => {
        const wrapper = shallow(<Header />);
        
        const menuBar = wrapper.find(MenuBar);

        expect(menuBar.length).toBe(1);
    });

});