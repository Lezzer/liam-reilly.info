import styled from "styled-components";

const BookTimelineJointStyled = styled.div`
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

export {
    BookTimelineJointStyled,
    TopLineStyled,
    MiddleLineStyled,
    BottomLineStyled
}