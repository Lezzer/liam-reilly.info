import React from 'react';
import MenuBar from '../../../../src/components/Header/MenuBar/menu-bar';
import { shallow } from 'enzyme';
import '../../../setup';

describe('the menu renders as expected', () => {

    let wrapper;
    
    beforeAll(() => wrapper = shallow(<MenuBar/>));

    it('renders without crashing', () => expect(wrapper.length).toBe(1));

    it('it contains 3x links', () => {
        const menu = wrapper.find('ul');

        expect(menu.children().length).toEqual(3);
    });

    it('the first link points to home', () => {
        const expectedUri = '/';
        const menu = wrapper.find('ul');
        const home = menu.childAt(0);

        const homeProps = home.props();
        expect(homeProps.children.props.to).toBe(expectedUri);
    });

    it('the first link says home', () => {
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

    it('the second link says resume', () => {
        const expectedUri = 'resume';
        const menu = wrapper.find('ul');
        const home = menu.childAt(1);

        const homeProps = home.props();
        expect(homeProps.children.props.children).toBe(expectedUri);
    });

    it('the third link points to contact', () => {
        const expectedUri = '/contact/';
        const menu = wrapper.find('ul');
        const home = menu.childAt(2);

        const homeProps = home.props();
        expect(homeProps.children.props.to).toBe(expectedUri);
    });

    it('the third link says contact', () => {
        const expectedUri = 'contact';
        const menu = wrapper.find('ul');
        const home = menu.childAt(2);

        const homeProps = home.props();
        expect(homeProps.children.props.children).toBe(expectedUri);
    });
});

