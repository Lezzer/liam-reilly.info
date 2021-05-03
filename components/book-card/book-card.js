import { PropTypes } from "prop-types"
import {
    AuthorStyled,
    BookCardStyled,
    CoverStyled,
    TitleStyled,
    IsbnStyled
} from "./book-card.styled";

const BookCard = ({title, author, isbn, url}) => <BookCardStyled>
    <CoverStyled src={url} alt={title}/>
    <TitleStyled>{title}</TitleStyled>
    <AuthorStyled>{author}</AuthorStyled>
    <IsbnStyled
        href={`https://isbnsearch.org/isbn/${isbn}`}
        title={`ISBN: ${isbn}`}
        target={"_blank"}
    >ISBN: {isbn}</IsbnStyled>
</BookCardStyled>

BookCard.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isbn: PropTypes.string.isRequired,
}

export default BookCard