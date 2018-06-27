import React from 'react';
import { shallow } from 'enzyme';
import ResumeStatement from "../../../../src/components/Resume/Statement/resume-statement";

import '../../../setup';

describe('the resume statement component renders as expected', () => {

    const wrapper = shallow(<ResumeStatement/>);


    it('renders without crashing', () => expect(wrapper.length).toBe(1));
});