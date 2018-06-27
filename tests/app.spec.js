import React from 'react';
import App from "../src/components/App/app";
import Header from '../src/components/Header/header';
import Content from '../src/components/MainContent/content';
import Footer from '../src/components/Footer/footer';
import { shallow } from 'enzyme';
import '../tests/setup';

describe('the app renders as expected', () => {

    let wrapper;
    
    beforeAll(() => wrapper = shallow(<App/>));

    it('renders without crashing', () => expect(wrapper.length).toBe(1));

    it('should contain a header', () => {
        const header = wrapper.find(Header);

        expect(header.length).toBe(1);
    });

    it('should contain a content', () => {
        const content = wrapper.find(Content);

        expect(content.length).toBe(1);
    });
    
    it('should contain a footer', () => {
        const footer = wrapper.find(Footer);

        expect(footer.length).toBe(1);
    });
});