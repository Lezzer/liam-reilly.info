import styled from "styled-components";

const BooksFilterStyled = styled.div`
  border: ${ ({ theme }) => theme.alternativeHighlight } 2px solid;
  box-shadow: .1rem .1rem 1rem .5rem ${ ({ theme }) => theme.alternativeColor };
  display: grid;
  grid-template-areas: 
    "title title title title title title title title title title title title title"
    "twentyone twentyone twentyone twentyone twentyone twentyone twentyone twentytwenty twentytwenty twentytwenty twentytwenty twentytwenty twentytwenty"
    "all jan feb mar apr may jun jul aug sep oct nov dec";
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  margin-bottom: 2rem;
`

const BookCardStyled = styled.div`
  display: grid;
  grid-template-areas: 
    "header header"
    "cover title"
    "cover author"
    "cover isbn";
  margin: 1rem auto 2rem auto;
  padding: 1rem;
  background-color: ${ ({ theme }) => theme.background };
  box-shadow: .1rem .1rem 1rem .5rem ${ ({ theme }) => theme.alternativeColor };
  border: 2px solid ${ ({ theme }) => theme.alternativeHighlight };
  font-size: 1.4rem;
  grid-template-columns: 15rem auto;

  hr {
    grid-area: header;
    display: block;
    border: 0 solid #000;
    border-bottom: 1px solid #C21F39;
    width: 100%;
    margin-top: 4rem;
  }
`

const HeaderStyled = styled.div`
  grid-area: header;
  display: flex;
  flex-direction: row;
  justify-content: space-between
`

const CalendarStyled = styled.span`
  background-color: ${ ({ theme }) => theme.alternativeHighlight };
  color: ${ ({ theme }) => theme.background };
  font-size: 1rem;
  height: 3rem;
  width: 3rem;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TitleStyled = styled.h1`
  grid-area: title;
  font-size: 2rem;
  margin: 0;
  padding: .25rem 1rem;
  justify-items: flex-start;
  justify-self: flex-start;
`

const AuthorStyled = styled.span`
  grid-area: author;
  font-size: 1.8rem;
  padding: .25rem 1rem;

`

const ISBNStyled = styled.span`
  grid-area: isbn;
  font-size: 1.4rem;
  padding: .25rem 1rem;
  
  a {
    color: #C21F39;
    border-bottom: #C21F39 1px dashed;
  }
  
  a:visited {
    color: #C21F39;
  }
`


const CoverImageStyled = styled.img`
  grid-area: cover;
  height: 20rem;
`

export {
    BooksFilterStyled,
    BookCardStyled,
    HeaderStyled,
    CalendarStyled,
    CoverImageStyled,
    TitleStyled,
    AuthorStyled,
    ISBNStyled
}