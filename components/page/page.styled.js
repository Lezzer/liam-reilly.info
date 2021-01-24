import styled from "styled-components"

const StyledPage = styled.section`
  background-color: ${({theme}) => theme.background};
 
  display: grid;
  grid-area: content;
  //
  //height:  100vh;
  //width:  100vw;
  //grid-template-rows:1fr 2fr 1fr;
  //grid-template-columns: auto;
  //grid-template-areas:
  //      "header"
  //      "content"
  //      "footer";
  //
`

export default StyledPage
