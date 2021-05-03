import { PropTypes } from "prop-types"
import {
    BookTimelineStyled,
    BookRowStyled,
    TimelineYearStyled,
    TimelineMonthStyled, BookListStyled,
} from "./book-timeline.styled"
import BookCard from "../book-card";
import BookTimelineJoint from "../book-timeline-joint";

const BookTimeline = ({ previousBooks, currentBook }) => <BookTimelineStyled>
    <BookListStyled>
        {
            previousBooks && previousBooks.map((book, index) => <li key={`${book.title}-${index}`}>
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
        <BookRowStyled>
            <BookCard
                title={currentBook.title}
                author={currentBook.author}
                isbn={currentBook.isbn}
                url={currentBook.url}
            />
        </BookRowStyled>
    </BookListStyled>
</BookTimelineStyled>

BookTimeline.propTypes = {
    previousBooks: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isbn: PropTypes.string.isRequired,
        year: PropTypes.number,
        month: PropTypes.string
    })),
    currentBook: PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isbn: PropTypes.string.isRequired,
    })
}

export default BookTimeline