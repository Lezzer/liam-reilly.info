import styled from "styled-components";

const BookTimelineStyled = styled.ul`
  list-style: none;
`

const BookRowStyled = styled.div`
    display: grid;
    grid-template-areas: "year book month";
    grid-template-columns: 10rem auto 10rem;
`

const SpacerRowStyled = styled.div`
  display: grid;
  grid-template-areas: 
      ". top ."
      ". middle ."
      ". bottom .";
  grid-template-columns: 10rem auto 10rem;
  margin: 1rem 0;
  list-style: none;
`

const TopLineStyled = styled.span`
  grid-area: top;
  
  display: grid;
  color: grey;
  justify-items: center;
  font-size: 2rem;
  font-weight: bolder;
`

const MiddleLineStyled = styled.span`
  grid-area: middle;

  display: grid;
  color: grey;
  justify-items: center;
  font-size: 4rem;
`

const BottomLineStyled = styled.span`
  grid-area: bottom;

  display: grid;
  color: grey;
  justify-items: center;
  font-size: 2rem;
  font-weight: bolder;
  margin-top: 5px;
`

const TimelineYearStyled = styled.h1`
  grid-area: year;

  display: grid;
  font-size: 2.5rem;
  justify-items: center;
`

const TimelineBookStyled = styled.div`
  grid-area: book;

  display: grid;
  justify-items: center;
  align-items: center;
  text-align: center;
`

const TimelineMonthStyled = styled.h1`
  grid-area: month;
  
  display: grid;
  font-size: 2.5rem;
  justify-items: center;
  text-transform: uppercase;
`

export {
    BookTimelineStyled,
    BookRowStyled,
    SpacerRowStyled,
    TimelineYearStyled,
    TimelineBookStyled,
    TimelineMonthStyled,
    TopLineStyled,
    MiddleLineStyled,
    BottomLineStyled
}