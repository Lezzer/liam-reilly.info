import React from 'react';
import { shallow } from 'enzyme';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import NotFound from '../../../src/components/NotFound/not-found';
import '../../setup';

describe('the not found component renders as expected', () => {

    const wrapper = shallow(<NotFound/>);


    it('renders without crashing', () => expect(wrapper.length).toBe(1));


    it('should contain a sad face font awesome icon (svg)', () => {
        const icon = wrapper.find(FontAwesomeIcon);
        const props = icon.props();

        expect(props.icon.iconName).toBe('frown');
    });
    
    it('should contain a 404 error code paragraph', () => {
        const p = wrapper.find(".error");
        const props = p.props();

        expect(props.children).toBe("Error:  404 - Page Not Found");
    });

    it('should contain 2 messages', () => {
        const p = wrapper.find(".msg");
     

        expect(wrapper.find(".msg").length).toBe(2);
    });

    it('should contain a page not found msg', () => {
        const p = wrapper.find(".msg");

        expect(p.at(0).text()).toBe("The page you requested doesn't seem to exist.");
    });

    it('should contain a please try again msg', () => {
        const p = wrapper.find(".msg");

        expect(p.at(1).text()).toBe("Please double check the address and try again.");
    });
    
});