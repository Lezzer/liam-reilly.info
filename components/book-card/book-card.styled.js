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

  @media only screen and ${device.laptopL} {
    grid-template-areas: 
    "cover title"
    "cover author"
    "cover link";
    "cover .";
    grid-template-columns: 12rem 30rem;
    grid-template-rows: 4rem 4rem 4rem 6rem;
  }
 `

const CoverStyled = styled.img`
  grid-area: cover;
 
  height: 15rem;
  padding: .5rem 0;

  @media only screen and ${device.laptopL} {
    height: 18rem;
    padding: 1rem;
  }
`

const TitleStyled = styled.h1`
  grid-area: title;

  margin: .5rem .5rem;
  font-size: 1.5rem;

  @media only screen and ${device.laptopL} {
    margin: 1rem 2.25rem;
    font-size: 1.75rem;
  }
`

const AuthorStyled = styled.h2`
  grid-area: author;

  margin: .5rem .5rem;
  font-size: 1.25rem;

  @media only screen and ${device.laptopL} {
    margin: 6rem 2.25rem;
    font-size: 1.55rem;
  }
`

const IsbnStyled = styled.a`
  grid-area: link;

  margin: .5rem .5rem;
  font-size: 1.25rem;
  text-decoration-line: underline;
  text-decoration-style: dashed;
  text-decoration-color: #C21F39;
  text-underline-position: under;
  
  @media only screen and ${device.laptopL} {
    margin: 5rem 2.25rem;
    font-size: 1.35rem;
  }
`

export {
    BookCardStyled,
    CoverStyled,
    TitleStyled,
    AuthorStyled,
    IsbnStyled
}
