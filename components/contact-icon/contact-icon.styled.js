import styled from "styled-components"
import { device } from "../../style/device"

const StyledContactIcon = styled.div`
  svg {
    font-size: 4.5rem;
    color: ${({theme}) => theme.background};
  }

  .circle {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: ${({theme}) => theme.alternativeHighlight};
    margin: 1rem 1rem 1rem 1rem;
    width: 8.55rem;
    height: 8.55rem;
  }

  .circle span {
    color: white;
    font-size: 1.2rem;
  }
  
  .brand_label {
    padding-top: .5rem;
  }

  @media only screen and ${device.tablet} {
    svg {
      font-size: 10rem;
    }
    .circle {
      margin: 2rem;
      width: 20rem;
      height: 20rem;
    }
    .circle span {
      font-size: 2.2rem;
    }


    .brand_label {
      padding-top: 1.5rem;
    }
    
  }
`

export default StyledContactIcon