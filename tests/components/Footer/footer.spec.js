import React from 'react';
import Footer from '../../../src/components/Footer/footer';
import { shallow } from 'enzyme';
import FooterMenuBar from "../../../src/components/Footer/MenuBar/footer-menu-bar";

import '../../setup';

describe('the footer renders as expected', () => {

    const wrapper = shallow(<Footer/>);


    it('renders without crashing', () => expect(wrapper.length).toBe(1));

    it('should contain a footer menu bar', () => {
        const menuBar = wrapper.find(FooterMenuBar);

        expect(menuBar.length).toBe(1);
    });
});