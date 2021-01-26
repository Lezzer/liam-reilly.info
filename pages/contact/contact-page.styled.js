import styled from "styled-components"
import { device } from "../../style/device"

const StyledContactPage = styled.section`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;

  h1 {
    padding: 0;
    margin: 2rem;
    text-decoration: underline;
  }
  
  .icons {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .title {
    text-align: center;
    font-size: 3rem;
    color: ${({theme}) => theme.alternativeHighlight};
  }
  
  @media only screen and ${device.laptop} {
    
    .icons {
      padding: 10rem;
      max-width: 100rem;
    }
    
    .title {
      font-size: 5rem;
    }
  }
`

export default StyledContactPage