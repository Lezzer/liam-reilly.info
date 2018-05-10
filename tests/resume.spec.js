import React from 'react';
import Resume from '../src/resume';
import { shallow } from 'enzyme';
import '../tests/setup';

import ResumeHeader from '../src/resume-header';
import ResumeStatement from "../src/resume-statement";
import ResumeTechnicalSkills from "../src/resume-technical-skills";
import ResumeBusinessSkills from "../src/resume-business-skills";
import ResumeProjects from "../src/resume-projects";
import ResumeExperience from "../src/resume-experience";

describe('the resume component renders as expected', () => {

    const wrapper = shallow(<Resume/>);


    it('renders without crashing', () => expect(wrapper.length).toBe(1));

    it('should contain a header name tag', () => {
        const name = wrapper.find("#name");

        expect(name.length).toBe(1);
        expect(name.text()).toBe("liam reilly");
    });

    it('should contain a resume header', () => {
        const menuBar = wrapper.find(ResumeHeader);

        expect(menuBar.length).toBe(1);
    });

    it('should contain a resume statement', () => {
        const statement = wrapper.find(ResumeStatement);

        expect(statement.length).toBe(1);
    });

    it('should contain a resume technical skills', () => {
        const skills = wrapper.find(ResumeTechnicalSkills);

        expect(skills.length).toBe(1);
    });

    it('should contain a resume business skills', () => {
        const skills = wrapper.find(ResumeBusinessSkills);

        expect(skills.length).toBe(1);
    });

    it('should contain a resume projects', () => {
        const projects = wrapper.find(ResumeProjects);

        expect(projects.length).toBe(1);
    });

    it('should contain a resume experience', () => {
        const experience = wrapper.find(ResumeExperience);

        expect(experience.length).toBe(1);
    });

});