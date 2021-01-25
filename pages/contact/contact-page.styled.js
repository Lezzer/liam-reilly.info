import styled from "styled-components"
import { device } from "../../style/device"

const StyledContactPage = styled.section`
  display: grid;
  grid-area: content;
  justify-items: center;
  
  .title {
    text-align: center;
    font-size: 3rem;
    color: ${({theme}) => theme.alternativeHighlight};
    margin: 4rem auto;
  }
  
  @media only screen and ${device.laptop} {
    
    .title {
      font-size: 5rem;
    }
  }
`

export default StyledContactPage