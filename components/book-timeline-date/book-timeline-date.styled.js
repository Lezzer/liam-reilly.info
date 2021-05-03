import styled from "styled-components";

const BookTimelineDateStyled = styled.div`
  display: grid;
  grid-template-areas: 
            "year month .";
  height: ${ ({ hideRow }) => hideRow === true ? "0" : "auto"};
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
    BookTimelineDateStyled,
    TimelineYearStyled,
    TimelineMonthStyled
}