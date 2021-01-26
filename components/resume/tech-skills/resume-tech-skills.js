import StyledResumeTechSkills from "./resume-tech-skills.styled";

const ResumeTechSkills = () => <StyledResumeTechSkills>
    <h2>technical skills</h2>

    <ul>
        <li>Cloud Providers: <span>Amazon Web Services, Google Cloud Platform, Microsoft Azure</span></li>
        <li>Backend: <span>C#</span></li>
        <li>Web: <span>React, NextJS/Gatsby, GraphQL, ASP.NET MVC</span></li>
        <li>Data Stores: <span>DynamoDB, Elasticsearch, MSSQL/MySQL, PostgreSQL</span></li>
        <li>Serverless: <span>Lambda, Fargate</span></li>
        <li>Container Orchestration: <span>Kubernetes, ECS, Docker</span></li>
        <li>Messaging: <span>SQS, SNS</span></li>
        <li>Testing: <span>React Testing Library, NUnit, Jest</span></li>
        <li>Dev/Git Ops: <span>Terraform, CircleCI, GitLab, GoCD, ArgoCD, Jenkins</span></li>
    </ul>

    <p>** This list is limited to more recently used technologies and is by no means exhaustive. **</p>
</StyledResumeTechSkills>

export default ResumeTechSkills