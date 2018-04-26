import React from 'react';
import Footer from '../src/footer';
import { shallow } from 'enzyme';
import '../tests/setup';
import FooterMenuBar from "../src/footer-menu-bar";

describe('the footer renders as expected', () => {

    const wrapper = shallow(<Footer/>);


    it('renders without crashing', () => expect(wrapper.length).toBe(1));

    it('should contain a footer menu bar', () => {
        const menuBar = wrapper.find(FooterMenuBar);

        expect(menuBar.length).toBe(1);
    });
});