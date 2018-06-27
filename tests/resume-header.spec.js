import React from 'react';
import { shallow } from 'enzyme';
import '../tests/setup';
import ResumeHeader from '../src/components/Resume/Header/resume-header';

describe('the resume header renders as expected', () => {

    const wrapper = shallow(<ResumeHeader />);

    it('renders without crashing', () => expect(wrapper.length).toBe(1));

    it('should contain a email font awesome icon', () => {
        const span = wrapper.find("#email");
        const props = span.props();

        expect(props.children[0].props.icon.iconName).toBe('envelope');
    });
    it('should contain a email span', () => {
        const span = wrapper.find("#email");
        const props = span.props();
        
        expect(props.children[1]).toBe("hire@liam-reilly.info");
    });


    it('should contain a phone font awesome icon', () => {
        const span = wrapper.find("#phone");
        const props = span.props();

        expect(props.children[0].props.icon.iconName).toBe('phone-volume');
    });
    it('should contain a phone span', () => {
        const span = wrapper.find("#phone");
        const props = span.props();

        expect(props.children[1]).toBe("07802 385 455");
    });

    it('should contain a location font awesome icon', () => {
        const span = wrapper.find("#location");
        const props = span.props();

        expect(props.children[0].props.icon.iconName).toBe('location-arrow');
    }); 
    it('should contain a location span', () => {
        const span = wrapper.find("#location");
        const props = span.props();

        expect(props.children[1]).toBe("manchester");
    });
});