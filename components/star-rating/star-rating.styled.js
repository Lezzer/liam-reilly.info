import styled from "styled-components";

const RatingStyled = styled.div`
  unicode-bidi: bidi-override;
  padding-left: .5rem; 
  
  span {
    display: inline-block;
    position: relative;
    width: 1.5em;
    color: ${ ({ theme }) => theme.alternativeHighlight };
    font-size: 2.2rem;
  }

  span:before {
    content: "\\2605";
    position: absolute;
  }
  
  //span:hover:before,
  //span:hover ~ span:before {
  //  content: "\\2605";
  //  position: absolute;
  //}
`

export {
    RatingStyled
}