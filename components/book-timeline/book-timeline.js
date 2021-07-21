import { useEffect, useState } from "react";
import { PropTypes } from "prop-types"
import { FilterButtonStyled, H1Styled } from "../blog/blog.styled";
import {
    AuthorStyled,
    BookCardStyled,
    BooksFilterStyled,
    CalendarStyled,
    CoverImageStyled,
    HeaderStyled,
    ISBNStyled,
    TitleStyled
} from "./book-timeline.styled";
import StarRating from "../star-rating";

const BookTimeline = ({ year, month }) => {
    const [ yearFilter, setYearFilter ] = useState(year)
    const [ monthFilter, setMonthFilter ] = useState(month)
    const [ books, setBooks ] = useState([])

    const filterYear = (filter) => setYearFilter(filter)
    const filterMonth = (filter) => setMonthFilter(filter)

    useEffect(() => {
        setBooks(getBooks())
    }, [ yearFilter, monthFilter ])

    const getBooks = () => {
        const books = require(`/public/static/books/${ yearFilter }.json`)
        const months = books["months"]
        let filteredBooks = []

        if (monthFilter === "all") {
            for (const m in months) {
                filteredBooks.push(months[m])
            }
            filteredBooks = [].concat.apply([], filteredBooks);
        } else {
            filteredBooks = months[monthFilter]
        }

        return filteredBooks
    }

    return <div>
        <BooksFilterStyled>
            <H1Styled>Filter</H1Styled>
            <FilterButtonStyled
                active={ yearFilter === "2021" }
                onClick={ () => filterYear("2021") }
                area={ "twentyone" }>2021
            </FilterButtonStyled>
            <FilterButtonStyled
                active={ yearFilter === "2020" }
                onClick={ () => filterYear("2020") }
                area={ "twentytwenty" }>2020
            </FilterButtonStyled>
            <FilterButtonStyled
                active={ monthFilter === "all" }
                onClick={ () => filterMonth("all") }
                area={ "all" }>ALL
            </FilterButtonStyled>
            <FilterButtonStyled
                active={ monthFilter === "jan" }
                onClick={ () => filterMonth("jan") }
                area={ "jan" }>JAN
            </FilterButtonStyled>
            <FilterButtonStyled
                active={ monthFilter === "feb" }
                onClick={ () => filterMonth("feb") }
                area={ "feb" }>FEB
            </FilterButtonStyled>
            <FilterButtonStyled
                active={ monthFilter === "mar" }
                onClick={ () => filterMonth("mar") }
                area={ "mar" }>MAR
            </FilterButtonStyled>
            <FilterButtonStyled
                active={ monthFilter === "apr" }
                onClick={ () => filterMonth("apr") }
                area={ "apr" }>APR
            </FilterButtonStyled>
            <FilterButtonStyled
                active={ monthFilter === "may" }
                onClick={ () => filterMonth("may") }
                area={ "may" }>MAY
            </FilterButtonStyled>
            <FilterButtonStyled
                active={ monthFilter === "jun" }
                onClick={ () => filterMonth("jun") }
                area={ "jun" }>JUN
            </FilterButtonStyled>
            <FilterButtonStyled
                active={ monthFilter === "jul" }
                onClick={ () => filterMonth("jul") }
                area={ "jul" }>JUL
            </FilterButtonStyled>
            <FilterButtonStyled
                active={ monthFilter === "aug" }
                onClick={ () => filterMonth("aug") }
                area={ "aug" }>AUG
            </FilterButtonStyled>
            <FilterButtonStyled
                active={ monthFilter === "sep" }
                onClick={ () => filterMonth("sep") }
                area={ "sep" }>SEPT
            </FilterButtonStyled>
            <FilterButtonStyled
                active={ monthFilter === "oct" }
                onClick={ () => filterMonth("oct") }
                area={ "oct" }>OCT
            </FilterButtonStyled>
            <FilterButtonStyled
                active={ monthFilter === "nov" }
                onClick={ () => filterMonth("nov") }
                area={ "nov" }>NOV
            </FilterButtonStyled>
            <FilterButtonStyled
                active={ monthFilter === "dec" }
                onClick={ () => filterMonth("dec") }
                area={ "dec" }>DEC
            </FilterButtonStyled>
        </BooksFilterStyled>
        {
            books && books.map(book => <BookCardStyled>
                <HeaderStyled>
                    <CalendarStyled
                        area={ "month" }>{ book.month }
                    </CalendarStyled>
                    <CalendarStyled
                        area={ "year" }>{ yearFilter }
                    </CalendarStyled>
                </HeaderStyled>
                <hr/>
                <CoverImageStyled
                    src={ book.url }
                />
                <TitleStyled>{ book.title }</TitleStyled>
                <AuthorStyled>{ book.author }</AuthorStyled>
                <StarRating stars={ book.stars }/>
                <ISBNStyled>ISBN: <a>{ book.isbn }</a></ISBNStyled>
            </BookCardStyled>)
        }
    </div>
}

BookTimeline.propTypes = {
    year: PropTypes.string,
    month: PropTypes.string
}

BookTimeline.defaultProps = {
    year: "2021",
    month: "july"
}

export default BookTimeline