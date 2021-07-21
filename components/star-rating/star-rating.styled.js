import styled from "styled-components";

const RatingStyled = styled.div`
  unicode-bidi: bidi-override;
  padding-left: .5rem; 
`
const EmptyStarStyled = styled.span`
  display: inline-block;
  position: relative;
  width: 1.5em;
  color: ${ ({ theme }) => theme.alternativeHighlight };
  font-size: 2.2rem;
`

const FilledStarStyled = styled.span`
  display: inline-block;
  position: relative;
  width: 1.5em;
  color: ${ ({ theme }) => theme.alternativeHighlight };
  font-size: 2.2rem;

  :before {
    content: "\\2605";
    position: absolute;
  }
`

export {
    RatingStyled,
    EmptyStarStyled,
    FilledStarStyled
}