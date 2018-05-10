import React from 'react';
import { shallow } from 'enzyme';
import '../tests/setup';

import ResumeStatement from "../src/resume-statement";

describe('the resume statement component renders as expected', () => {

    const wrapper = shallow(<ResumeStatement/>);


    it('renders without crashing', () => expect(wrapper.length).toBe(1));
});