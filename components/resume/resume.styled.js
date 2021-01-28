import styled from "styled-components";
import {device} from "../../style/device";

const StyledResume = styled.article`
  background-color: ${({theme}) => theme.background};
  display: flex;
  flex-direction: column;
  text-align: center;
  
  h1 {
    font-size: 3.5rem;
    font-weight: 200;
    text-transform: uppercase;
    margin: 1rem 0;
  }

  hr {
    display: block;
    border: 0 solid ${({theme}) => theme.footer};
    border-bottom: 1px solid ${({theme}) => theme.alternativeHighlight};
    margin: 1.25rem 0;
    width: 100%;
  }

  @media only screen and ${device.laptop} {
    justify-items: center;
    align-items: center;
    
    h1 {
      font-size: 6rem;
      font-weight: 200;
      margin: 2rem 0 0 0;
    }

    hr {
      margin: 1.25rem 0 1rem 0;
      width: 90%;
    }
  }


  @media only print {

    hr {
      margin: .5rem 0 1rem 0;
      border-bottom: 1px solid ${({theme}) => theme.printSeparator};
    }
    
  }
`

export default StyledResume