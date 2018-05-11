import React from 'react';
import { shallow } from 'enzyme';
import '../tests/setup';

import ResumeExperience from "../src/resume-experience";
import ResumeJobHistoryItem from "../src/resume-job-history-item";

describe('the resume statement component renders as expected', () => {

    const wrapper = shallow(<ResumeExperience />);


    it('renders without crashing', () => expect(wrapper.length).toBe(1));

    it('contains a header', () => {
        const header = wrapper.find('.experience h2');
        expect(header.length).toBe(1);
    });
    
    it('contains 7x job-history-items', () => {

        const items = wrapper.find(ResumeJobHistoryItem).length;
        expect(items).toBe(7);
    });
});