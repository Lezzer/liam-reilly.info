import { PropTypes } from "prop-types"
import {
    BookTimelineStyled,
    BookRowStyled,
    SpacerRowStyled,
    TimelineYearStyled,
    TimelineMonthStyled,
    TimelineBookStyled,
    TopLineStyled,
    MiddleLineStyled,
    BottomLineStyled
} from "./book-timeline.styled"

const BookTimeline = ({ books }) => <BookTimelineStyled>
    {
        books && books.map((book, index) => <li key={`${book.title}-${index}`}>
            <BookRowStyled>
                <TimelineYearStyled>{book.year}</TimelineYearStyled>
                <TimelineBookStyled>
                    <img src={book.url}/>
                </TimelineBookStyled>
                <TimelineMonthStyled>{book.month}</TimelineMonthStyled>
            </BookRowStyled>
            <SpacerRowStyled>
                <TopLineStyled>|</TopLineStyled>
                <MiddleLineStyled>|</MiddleLineStyled>
                <BottomLineStyled>|</BottomLineStyled>
            </SpacerRowStyled>
        </li>)
    }
</BookTimelineStyled>

BookTimeline.propTypes = {
    books: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        year: PropTypes.number,
        month: PropTypes.string
    }))
}

export default BookTimeline