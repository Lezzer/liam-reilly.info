import styled from "styled-components";
import { device } from "../../style/device";

const BookCardStyled = styled.div`
  grid-area: card;

  background-color: silver;
  border-radius: 1rem;
  display: grid;
  grid-template-areas: 
    ". cover ."
    "title title title"
    "author author author"
    "link link link";
  justify-content: center;

  :hover {
    animation-duration: 1ms;
    animation-name: grow;
    background-color: darkgray;
  }

  @media only screen and ${device.tablet} {
    grid-template-areas: 
    "cover title"
    "cover author"
    "cover link";
    "cover .";
    grid-template-columns: 12vw 30vw;
    grid-template-rows: 4rem 4rem 4rem 6rem;
  }
 `

const CoverStyled = styled.img`
  grid-area: cover;
 
  height: 15rem;
  padding: .5rem 0;

  @media only screen and ${device.tablet} {
    height: 18rem;
    padding: 1rem;
  }
`

const TitleStyled = styled.h1`
  grid-area: title;

  margin: .5rem .5rem;
  font-size: 1.75rem;

  @media only screen and ${device.tablet} {
    margin: 1rem 0;
    font-size: 2.5rem;
  }
`

const AuthorStyled = styled.h2`
  grid-area: author;

  margin: .5rem;
  font-size: 1.5rem;
`

const IsbnStyled = styled.a`
  grid-area: link;

  margin: .5rem;
  font-size: 1.25rem;
`

export {
    BookCardStyled,
    CoverStyled,
    TitleStyled,
    AuthorStyled,
    IsbnStyled
}
