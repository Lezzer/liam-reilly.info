import React, { Component } from 'react';
import css from './styles/resume-experience.css';
import ResumeJobHistoryItem from "./resume-job-history-item";

export default class ResumeExperience extends Component{

    render() {
        return (
            <div className={css.experience}>
                <h2>experience</h2>
                
                <ResumeJobHistoryItem 
                    company={"Zuto"}
                    location={"Manchester"}
                    start={"2016"}
                    end={"Present"}
                    position={"Senior Software Engineer"}
                />

                <ResumeJobHistoryItem
                    company={"SoNQ"}
                    location={"Manchester"}
                    start={"2015"}
                    end={"2016"}
                    position={"Senior Software Developer (Team Leader)"}
                />

                <ResumeJobHistoryItem
                    company={"MediaCom North"}
                    location={"Manchester"}
                    start={"2012"}
                    end={"2015"}
                    position={"Senior Systems Developer"}
                />

                <ResumeJobHistoryItem
                    company={"3-Si Limited"}
                    location={"Newcastle-Under-Lyme"}
                    start={"2010"}
                    end={"2012"}
                    position={"Software Developer"}
                />

                <ResumeJobHistoryItem
                    company={"Shire Dental / Consulsoft (Midshire)"}
                    location={"Middlewich"}
                    start={"2006"}
                    end={"2010"}
                    position={"Software Developer"}
                />

                <ResumeJobHistoryItem
                    company={"Huntleigh Renray"}
                    location={"Winsford"}
                    start={"2004"}
                    end={"2006"}
                    position={"Software Developer"}
                />

                <ResumeJobHistoryItem
                    company={"Tissue Science Laboratories"}
                    location={"Winsford"}
                    start={"2001"}
                    end={"2004"}
                    position={"Software Developer"}
                />
                
            </div>
        );
    }

}