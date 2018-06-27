import React from 'react';
import Resume from '../src/components/Resume/resume';
import { shallow } from 'enzyme';
import '../tests/setup';

import ResumeHeader from '../src/components/Resume/Header/resume-header';
import ResumeStatement from "../src/components/Resume/Statement/resume-statement";
import ResumeTechnicalSkills from "../src/components/Resume/TechSkills/resume-technical-skills";
import ResumeBusinessSkills from "../src/components/Resume/BusinessSkills/resume-business-skills";
import ResumeProjects from "../src/components/Resume/Projects/resume-projects";
import ResumeExperience from "../src/components/Resume/Experience/resume-experience";

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