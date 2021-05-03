import styled from "styled-components";

const BookTimelineStyled = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const BookListStyled = styled.ul`
  list-style: none;
`

const BookRowStyled = styled.div`
    display: grid;
    grid-template-areas: "year card month";
    grid-template-columns: 10vw auto 10vw;
`

const TimelineYearStyled = styled.h1`
  grid-area: year;

  font-size: 2.5rem;
  text-align: center;
`

const TimelineMonthStyled = styled.h1`
  grid-area: month;
  
  font-size: 2.5rem;
  text-align: center;
  text-transform: uppercase;
`

export {
    BookTimelineStyled,
    BookListStyled,
    BookRowStyled,
    TimelineYearStyled,
    TimelineMonthStyled
}