import React from 'react';
import { shallow } from 'enzyme';
import ResumeTechnicalSkills from "../../../../src/components/Resume/TechSkills/resume-technical-skills";

import '../../../setup';

describe('the resume statement component renders as expected', () => {

    const wrapper = shallow(<ResumeTechnicalSkills/>);


    it('renders without crashing', () => expect(wrapper.length).toBe(1));


    it('contains a header', () => {
        const header = wrapper.find('.technical_skills h2');
        expect(header.length).toBe(1);
    });

    it('contains an unordered list with 10x list items', () => {

        const ul = wrapper.find(".technical_skills ul");
        const items = ul.children().length;
        expect(items).toBe(10);
    });
});