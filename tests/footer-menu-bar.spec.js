import React from 'react';
import FooterMenuBar from '../src/footer-menu-bar';
import { shallow } from 'enzyme';
import '../tests/setup';

describe('the menu renders as expected', () => {

    it('renders without crashing', () => {
        const wrapper = shallow(<FooterMenuBar />);

        expect(wrapper.length).toBe(1);

    });

    it('it contains 5x links', () => {
        const wrapper = shallow(<FooterMenuBar/>);
        const menu = wrapper.find('ul');

        expect(menu.children().length).toEqual(5);
    });

    it('the first link points to home', () => {
        const expectedUri = '/';
        const wrapper = shallow(<FooterMenuBar/>);
        const menu = wrapper.find('ul');
        const home = menu.childAt(0);

        const homeProps = home.props();
        expect(homeProps.children.props.to).toBe(expectedUri);
    });

    it('the first link points says home', () => {
        const expectedUri = 'home';
        const wrapper = shallow(<FooterMenuBar/>);
        const menu = wrapper.find('ul');
        const home = menu.childAt(0);

        const homeProps = home.props();
        expect(homeProps.children.props.children).toBe(expectedUri);
    });

    it('the second link points to resume', () => {
        const expectedUri = '/resume/';
        const wrapper = shallow(<FooterMenuBar/>);
        const menu = wrapper.find('ul');
        const home = menu.childAt(1);

        const homeProps = home.props();
        expect(homeProps.children.props.to).toBe(expectedUri);
    });

    it('the second link points says resume', () => {
        const expectedUri = 'resume';
        const wrapper = shallow(<FooterMenuBar/>);
        const menu = wrapper.find('ul');
        const home = menu.childAt(1);

        const homeProps = home.props();
        expect(homeProps.children.props.children).toBe(expectedUri);
    });

    it('the third link points to blog', () => {
        const expectedUri = '/blog/';
        const wrapper = shallow(<FooterMenuBar/>);
        const menu = wrapper.find('ul');
        const home = menu.childAt(2);

        const homeProps = home.props();
        expect(homeProps.children.props.to).toBe(expectedUri);
    });

    it('the third link points says blog', () => {
        const expectedUri = 'blog';
        const wrapper = shallow(<FooterMenuBar/>);
        const menu = wrapper.find('ul');
        const home = menu.childAt(2);

        const homeProps = home.props();
        expect(homeProps.children.props.children).toBe(expectedUri);
    });

    it('the fourth link points to contact', () => {
        const expectedUri = '/contact/';
        const wrapper = shallow(<FooterMenuBar/>);
        const menu = wrapper.find('ul');
        const home = menu.childAt(3);

        const homeProps = home.props();
        expect(homeProps.children.props.to).toBe(expectedUri);
    });

    it('the fourth link points says contact', () => {
        const expectedUri = 'contact';
        const wrapper = shallow(<FooterMenuBar/>);
        const menu = wrapper.find('ul');
        const home = menu.childAt(3);

        const homeProps = home.props();
        expect(homeProps.children.props.children).toBe(expectedUri);
    });

    it('the fifth link points to gitub', () => {
        const expectedUri = 'https://www.github.com/lezzer/';
        const wrapper = shallow(<FooterMenuBar/>);
        const menu = wrapper.find('ul');
        const home = menu.childAt(4);

        const homeProps = home.props();
        expect(homeProps.children.props.to).toBe(expectedUri);
    });

    it('the fifth link points says github', () => {
        const expectedUri = 'github';
        const wrapper = shallow(<FooterMenuBar/>);
        const menu = wrapper.find('ul');
        const home = menu.childAt(4);

        const homeProps = home.props();
        expect(homeProps.children.props.children).toBe(expectedUri);
    });
});

