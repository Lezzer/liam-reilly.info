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
  
`

export {
    BookTimelineStyled,
    BookListStyled,
    BookRowStyled
}