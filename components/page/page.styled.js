import styled from "styled-components"
import {device} from "../../style/device";

const StyledPage = styled.section`
  display: grid;
  grid-area: content;
  
  background-color: ${({theme}) => theme.background};
  padding: 2rem 1.25rem;


  @media only screen and ${device.laptop} {
    padding: 3rem 5rem;
  }
  
`

export default StyledPage
