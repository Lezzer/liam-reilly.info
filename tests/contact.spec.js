import React from 'react';
import Contact from '../src/components/Contact/contact';
import { shallow } from 'enzyme';
import '../tests/setup';

describe('the contact component renders as expected', () => {

    const wrapper = shallow(<Contact/>);


    it('renders without crashing', () => expect(wrapper.length).toBe(1));
    
});