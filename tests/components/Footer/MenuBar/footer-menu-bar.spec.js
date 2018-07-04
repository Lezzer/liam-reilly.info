import React from 'react';
import FooterMenuBar from '../../../../src/components/Footer/MenuBar/footer-menu-bar';
import { shallow } from 'enzyme';
import '../../../setup';

describe('the menu renders as expected', () => {


    let wrapper;

    beforeAll(() => wrapper = shallow(<FooterMenuBar/>));

    it('renders without crashing', () => expect(wrapper.length).toBe(1));

    it('it contains 5x links', () => {
        const menu = wrapper.find('ul');

        expect(menu.children().length).toEqual(5);
    });

    it('the first link points to home', () => {
        const expectedUri = '/';
        const menu = wrapper.find('ul');
        const home = menu.childAt(0);

        const homeProps = home.props();
        expect(homeProps.children.props.to).toBe(expectedUri);
    });

    it('the first link points says home', () => {
        const expectedUri = 'home';
        const menu = wrapper.find('ul');
        const home = menu.childAt(0);

        const homeProps = home.props();
        expect(homeProps.children.props.children).toBe(expectedUri);
    });

    it('the second link points to resume', () => {
        const expectedUri = '/resume/';
        const menu = wrapper.find('ul');
        const home = menu.childAt(1);

        const homeProps = home.props();
        expect(homeProps.children.props.to).toBe(expectedUri);
    });

    it('the second link points says resume', () => {
        const expectedUri = 'resume';
        const menu = wrapper.find('ul');
        const home = menu.childAt(1);

        const homeProps = home.props();
        expect(homeProps.children.props.children).toBe(expectedUri);
    });

    it('the third link points to blog', () => {
        const expectedUri = '/blog/';
        const menu = wrapper.find('ul');
        const home = menu.childAt(2);

        const homeProps = home.props();
        expect(homeProps.children.props.to).toBe(expectedUri);
    });

    it('the third link points says blog', () => {
        const expectedUri = 'blog';
        const menu = wrapper.find('ul');
        const home = menu.childAt(2);

        const homeProps = home.props();
        expect(homeProps.children.props.children).toBe(expectedUri);
    });

    it('the fourth link points to contact', () => {
        const expectedUri = '/contact/';
        const menu = wrapper.find('ul');
        const home = menu.childAt(3);

        const homeProps = home.props();
        expect(homeProps.children.props.to).toBe(expectedUri);
    });

    it('the fourth link points says contact', () => {
        const expectedUri = 'contact';
        const menu = wrapper.find('ul');
        const home = menu.childAt(3);

        const homeProps = home.props();
        expect(homeProps.children.props.children).toBe(expectedUri);
    });

    it('the fifth link points to gitub', () => {
        const expectedUri = 'https://github.com/liam-reilly/';
        const menu = wrapper.find('ul');
        const home = menu.childAt(4);

        const homeProps = home.props();
        expect(homeProps.children.props.to).toBe(expectedUri);
    });

    it('the fifth link points says github', () => {
        const expectedUri = 'github';
        const menu = wrapper.find('ul');
        const home = menu.childAt(4);

        const homeProps = home.props();
        expect(homeProps.children.props.children).toBe(expectedUri);
    });
});
