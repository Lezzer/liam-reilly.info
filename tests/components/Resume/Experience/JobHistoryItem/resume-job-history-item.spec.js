import React from 'react';
import { shallow } from 'enzyme';
import ResumeJobHistoryItem from "../../../../../src/components/Resume/Experience/JobHistoryItem/resume-job-history-item";

import '../../../../setup';

describe('the resume statement component renders as expected', () => {

    const wrapper = shallow(<ResumeJobHistoryItem
        company={"liam-reilly.info"}
        location={"Manchester"}
        start={"2018"}
        end={"Present"}
        position={"Owner"} />);


    it('renders without crashing', () => expect(wrapper.length).toBe(1));
    
    it('contains an unordered list with 3 list items', () => {
       
        const ul = wrapper.find(".job_history_item ul");
        const items = ul.children().length;
        expect(items).toBe(3);
    });
    
    it('contains a span', () => {
        const span = wrapper.find('.job_history_item span');
        expect(span.length).toBe(1);
    })
});