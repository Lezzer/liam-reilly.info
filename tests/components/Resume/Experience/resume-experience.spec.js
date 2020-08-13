import React from 'react';
import { shallow } from 'enzyme';
import ResumeExperience from "../../../../src/components/Resume/Experience/resume-experience";
import ResumeJobHistoryItem from "../../../../src/components/Resume/Experience/JobHistoryItem/resume-job-history-item";

import '../../../setup';

describe('the resume statement component renders as expected', () => {

    const wrapper = shallow(<ResumeExperience />);


    it('renders without crashing', () => expect(wrapper.length).toBe(1));

    it('contains a header', () => {
        const header = wrapper.find('.experience h2');
        expect(header.length).toBe(1);
    });
    
    it('contains 10x job-history-items', () => {

        const items = wrapper.find(ResumeJobHistoryItem).length;
        expect(items).toBe(10);
    });
});