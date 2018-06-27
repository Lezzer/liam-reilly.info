import React from 'react';
import { Route } from 'react-router-dom';
import Content from '../../../src/components/MainContent/content';
import { shallow } from 'enzyme';
import Home from '../../../src/components/Home/home';
import Resume from '../../../src/components/Resume/resume';
import Blog from '../../../src/components/Blog/blog';
import Contact from '../../../src/components/Contact/contact';

import '../../setup';

describe('the content section renders as expected', () => {

    let wrapper;

    beforeAll(() => {
        wrapper = shallow(<Content />);
    });
    
    it('renders without crashing', () => expect(wrapper.length).toBe(1));

    it('renders correct components for routes', () => {
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