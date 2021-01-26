import { PropTypes } from "prop-types"
import StyledResumeJobHistoryItem from "./resume-job-history-item.styled";

const ResumeJobHistoryItem = props => <StyledResumeJobHistoryItem>
    <ul>
        <li>{props.company}</li>
        <li >{props.location}</li>
        <li >{props.start} - {props.end}</li>
    </ul>
    <span>{props.position}</span>
</StyledResumeJobHistoryItem>

ResumeJobHistoryItem.propTypes = {
    company: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
}

export default ResumeJobHistoryItem