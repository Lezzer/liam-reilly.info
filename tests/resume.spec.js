import React from 'react';
import Resume from '../src/resume';
import { shallow } from 'enzyme';
import '../tests/setup';

describe('the resume component renders as expected', () => {

    const wrapper = shallow(<Resume/>);


    it('renders without crashing', () => expect(wrapper.length).toBe(1));

});