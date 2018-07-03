import React, { Component } from 'react';
import css from './resume-experience.css';
import ResumeJobHistoryItem from "./JobHistoryItem/resume-job-history-item";

export default class ResumeExperience extends Component{

    render() {
        return (
            <div className={css.experience}>
                <h2>experience</h2>

                <ResumeJobHistoryItem
                    company={"Ditto Music"}
                    location={"Liverpool / Remote"}
                    start={"2018"}
                    end={"Present"}
                    position={"Principal Software Engineer"}
                />
                
                <ResumeJobHistoryItem 
                    company={"Zuto"}
                    location={"Manchester"}
                    start={"2016"}
                    end={"2018"}
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
                    company={"Shire Dental/Consulsoft"}
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