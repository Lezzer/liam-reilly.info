import React from 'react';
import { Route } from 'react-router-dom';
import Content from '../src/content';
import { shallow } from 'enzyme';
import Home from '../src/home';
import Resume from '../src/resume';
import Blog from '../src/blog';
import Contact from '../src/contact';

import '../tests/setup';

describe('the content section renders as expected', () => {

    it('renders without crashing', () => {
        const wrapper = shallow(<Content />);

        expect(wrapper.length).toBe(1);
    });

    it('renders correct components for routes', () => {
        const wrapper = shallow(<Content/>);
        const pathMap = wrapper
            .find(Route)
            .reduce((pathMap, route) => {
                const routeProps = route.props();
                pathMap[routeProps.path] = routeProps.component;
                return pathMap;
            }, {});

        expect(pathMap['/']).toBe(Home);
        expect(pathMap['/resume/']).toBe(Resume);
        expect(pathMap['/blog/']).toBe(Blog);
        expect(pathMap['/contact/']).toBe(Contact);
    });
});