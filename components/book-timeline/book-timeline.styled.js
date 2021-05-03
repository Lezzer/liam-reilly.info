import styled from "styled-components";
import {device} from "../../style/device";

const BookTimelineStyled = styled.div`
  display: flex;
  justify-content: center;
`

const BookListStyled = styled.ul`
  list-style: none;
`

const BookRowStyled = styled.div`
    display: grid;
    grid-template-areas: 
            "card card card";
  
  @media only screen and ${device.tablet} {
    grid-template-areas: "year card month";
    grid-template-columns: 10vw auto 10vw;
  }
  
`

export {
    BookTimelineStyled,
    BookListStyled,
    BookRowStyled
}