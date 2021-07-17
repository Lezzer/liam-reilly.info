import styled from "styled-components"

const BlogFilterStyled = styled.div`
  border: ${({theme}) => theme.alternativeHighlight} 2px solid;
   box-shadow: .1rem .1rem 1rem .5rem ${({theme}) => theme.alternativeColor};
  display: grid;
  grid-template-areas: 
          "title title"
          "twentyone twentytwenty";
  grid-template-rows: auto;
  grid-template-columns: auto auto;
  margin-bottom: 2rem;
`

const H1Styled = styled.h1`
  grid-area: title;
  color: ${({theme}) => theme.alternativeHighlight};
  text-align: center;
  margin: 0;
  font-size: 1.4rem;
  font-weight: bolder;
  padding: 1rem;
  text-transform: uppercase;
`

const FilterButtonStyled = styled.span`
  grid-area: ${({area}) => area};
  color: ${({theme}) => theme.alternativeHighlight};
  cursor: pointer;
  margin: 0;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bolder;
  padding: 1rem;
  text-transform: uppercase;
  
  background-color: ${({theme, active}) => active ? theme.alternativeHighlight : theme.background};
  color: ${({theme, active}) => active ? theme.background : theme.alternativeHighlight};
  
  :hover {
    background-color: ${({theme}) => theme.alternativeHighlight};
    color: ${({theme}) => theme.background};
  }
`

export {
    BlogFilterStyled,
    H1Styled,
    FilterButtonStyled
}