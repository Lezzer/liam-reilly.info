import { PropTypes } from "prop-types";
import { BookTimelineDateStyled } from "./book-timeline-date.styled";
import {
    TimelineMonthStyled,
    TimelineYearStyled
} from "./book-timeline-date.styled";

const BookTimelineDate = ({year, month}) => {

    const hideRow = (month === undefined)

    console.log(hideRow)

    return <BookTimelineDateStyled test={hideRow} >
        <TimelineYearStyled>{year}</TimelineYearStyled>
        <TimelineMonthStyled>{month}</TimelineMonthStyled>
    </BookTimelineDateStyled>;
}

BookTimelineDate.propTypes = {
    year: PropTypes.number,
    month: PropTypes.string
}

export default BookTimelineDate