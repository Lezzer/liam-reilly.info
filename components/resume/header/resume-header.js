import StyledResumeHeader from "./resume-header.styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationArrow } from '@fortawesome/fontawesome-free-solid';

const ResumeHeader = () => <StyledResumeHeader>
    <span>
        <FontAwesomeIcon icon={faEnvelope} spin={false} />
        hire@liam-reilly.info
    </span>
    <span className={"location"}>
        <FontAwesomeIcon icon={faLocationArrow} />
        manchester
    </span>
</StyledResumeHeader>

export default ResumeHeader