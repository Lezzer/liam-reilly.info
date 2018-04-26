import React from 'react';
import Content from '../src/content';
import { shallow } from 'enzyme';
import '../tests/setup';

describe('the content section renders as expected', () => {

    it('renders without crashing', () => {
        const wrapper = shallow(<Content />);

        expect(wrapper.length).toBe(1);
    });
});