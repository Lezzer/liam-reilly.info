import { PropTypes } from "prop-types"
import {
    BookTimelineStyled,
    BookRowStyled,
    TimelineYearStyled,
    TimelineMonthStyled, BookListStyled,
} from "./book-timeline.styled"
import BookCard from "../book-card";
import BookTimelineJoint from "../book-timeline-joint";

const BookTimeline = ({ books }) => <BookTimelineStyled>
    <BookListStyled>
        {
            books && books.map((book, index) => <li key={`${book.title}-${index}`}>
                <BookRowStyled>
                    <TimelineYearStyled>{book.year}</TimelineYearStyled>
                    <BookCard
                        title={book.title}
                        author={book.author}
                        isbn={book.isbn}
                        url={book.url}/>
                    <TimelineMonthStyled>{book.month}</TimelineMonthStyled>
                </BookRowStyled>
                <BookTimelineJoint/>
            </li>)
        }
    </BookListStyled>
</BookTimelineStyled>

BookTimeline.propTypes = {
    books: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isbn: PropTypes.string.isRequired,
        year: PropTypes.number,
        month: PropTypes.string
    }))
}

export default BookTimeline