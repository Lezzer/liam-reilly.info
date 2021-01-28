import StyledResume from "./resume.styled";
import ResumeHeader from "./header/resume-header";
import ResumeStatement from "./statement";
import ResumeTechSkills from "./tech-skills";
import ResumeBusinessSkills from "./business-skills";
import ResumeProjects from "./projects";
import ResumeExperience from "./experience";

const Resume = () => <StyledResume>
    <h1>liam reilly</h1>

    <ResumeHeader/>
    <hr/>

    <ResumeStatement/>
    <hr/>

    <ResumeTechSkills/>
    <hr/>

    <ResumeBusinessSkills/>
    <hr/>

    <ResumeProjects/>
    <hr/>

    <ResumeExperience/>
</StyledResume>

export default Resume