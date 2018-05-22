import React from 'react';
import { shallow } from 'enzyme';
import '../tests/setup';

import ResumeProjects from "../src/resume-projects";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';


describe('the resume projects component renders as expected', () => {

    const wrapper = shallow(<ResumeProjects/>);


    it('renders without crashing', () => expect(wrapper.length).toBe(1));

    it('contains a header', () => {
        const header = wrapper.find('.projects h2');
        expect(header.length).toBe(1);
    });

    it('contains 3x font awesome icons', () => {
        const items = wrapper.find(FontAwesomeIcon);
        expect(items.length).toBe(3);
    });
    
    it('contains an unordered list with 3x zuto projects', () => {
        const ul = wrapper.find("#zuto");
        const items = ul.children().length;
        expect(items).toBe(3);
    });

    it('contains an unordered list with 3x sonq projects', () => {
        const ul = wrapper.find("#sonq");
        const items = ul.children().length;
        expect(items).toBe(3);
    });

    it('contains an unordered list with 3x mediacom projects', () => {
        const ul = wrapper.find("#mediacom");
        const items = ul.children().length;
        expect(items).toBe(3);
    });
});