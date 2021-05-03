import { PropTypes } from "prop-types"
import {
    BookTimelineStyled,
    BookRowStyled,
    BookListStyled,
} from "./book-timeline.styled"
import BookCard from "../book-card";
import BookTimelineJoint from "../book-timeline-joint";
import BookTimelineDate from "../book-timeline-date";

const BookTimeline = ({ previousBooks, currentBook }) => <BookTimelineStyled>
    <BookListStyled>
        {
            previousBooks && previousBooks.map((book, index) => <li key={`${book.title}-${index}`}>
                <BookTimelineDate
                    year={book.year}
                    month={book.month}
                />
                <BookRowStyled>
                    <BookCard
                        title={book.title}
                        author={book.author}
                        isbn={book.isbn}
                        url={book.url}/>
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
        isbn: PropTypes.number.isRequired,
        year: PropTypes.number,
        month: PropTypes.string
    })),
    currentBook: PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isbn: PropTypes.number.isRequired,
    })
}

export default BookTimeline