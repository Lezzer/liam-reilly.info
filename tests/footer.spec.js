import React from 'react';
import Footer from '../src/footer';
import { shallow } from 'enzyme';
import '../tests/setup';

describe('the footer renders as expected', () => {

    it('renders without crashing', () => {
        const wrapper = shallow(<Footer />);

        expect(wrapper.length).toBe(1);
    });
    
});