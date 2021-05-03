import styled from "styled-components";

const BookCardStyled = styled.div`
  grid-area: card;
  
  display: grid;
  grid-template-areas: 
    "cover title"
    "cover author"
    "cover link";
    "cover .";
  grid-template-columns: 12vw 30vw;
  grid-template-rows: 4rem 4rem 4rem 6rem;
  
  background-color: silver;
  border-radius: 1rem;

  :hover {
    animation-duration: 1ms;
    animation-name: grow;
    background-color: darkgray;
  }
 `

const CoverStyled = styled.img`
  grid-area: cover;
 
  height: 18rem;
  padding: 1rem;
`

const TitleStyled = styled.h1`
  grid-area: title;
  
  margin: 1rem 0;
  font-size: 2.5rem;
`

const AuthorStyled = styled.h2`
  grid-area: author;

  margin: 1rem 0;
  font-size: 1.5rem;
`

const IsbnStyled = styled.a`
  grid-area: link;

  font-size: 1.25rem;
  //color: coral;
`

export {
    BookCardStyled,
    CoverStyled,
    TitleStyled,
    AuthorStyled,
    IsbnStyled
}
