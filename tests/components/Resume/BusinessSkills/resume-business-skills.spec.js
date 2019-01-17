import React from 'react';
import { shallow } from 'enzyme';
import ResumeBusinessSkills from "../../../../src/components/Resume/BusinessSkills/resume-business-skills";

import '../../../setup';

describe('the resume statement component renders as expected', () => {

    const wrapper = shallow(<ResumeBusinessSkills/>);


    it('renders without crashing', () => expect(wrapper.length).toBe(1));


    it('contains a header', () => {
        const header = wrapper.find('.business_skills h2');
        expect(header.length).toBe(1);
    });
    
    it('contains an unordered list with 5 list items', () => {

        const ul = wrapper.find(".business_skills ul");
        const items = ul.children().length;
        expect(items).toBe(6);
    });
});