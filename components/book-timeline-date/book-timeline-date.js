import { PropTypes } from "prop-types";
import { BookTimelineDateStyled } from "./book-timeline-date.styled";
import {
    TimelineMonthStyled,
    TimelineYearStyled
} from "./book-timeline-date.styled";

const BookTimelineDate = ({year, month}) => {

    const hide = (month === undefined)

    return <BookTimelineDateStyled hideRow={hide} >
        <TimelineYearStyled>{year}</TimelineYearStyled>
        <TimelineMonthStyled>{month}</TimelineMonthStyled>
    </BookTimelineDateStyled>;
}

BookTimelineDate.propTypes = {
    year: PropTypes.number,
    month: PropTypes.string
}

export default BookTimelineDate