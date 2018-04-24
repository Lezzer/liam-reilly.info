import React from 'react';
import ReactDOM from 'react-dom';
import MenuBar from '../src/menu-bar';
import { mount } from 'enzyme';
import expect from 'expect';
import 'jest-enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import '../tests/setup';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Router>
            <MenuBar />
        </Router> , div);
});

xit('the first link should point to home (/)', () => {
    const wrapper = mount(<Router><MenuBar/></Router>);
    const menu = wrapper.find('#menu-bar');

    const items = menu.children();
    
    const homeItem = items.first();

    expect(homeItem.text().to.equal('home'));
});