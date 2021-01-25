import styled from "styled-components"
import { device } from "../../style/device"

const StyledFooter = styled.section`
  display: grid;
  grid-area: footer;
  
  background-color: ${({theme}) => theme.footer};
  color: ${({theme}) => theme.alternativeColor};
  
  .footer {
    display: flex;
    flex-direction: column;
    font-size: 1.4rem;
  }

  .footer h1 {
    margin-top: 1rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  .footer .about {
    padding: 1rem;
  }
  
  .footer .about a {
    color: ${({theme}) => theme.highlight};
  }
  
  .footer .about p {
    font-size: 1.2rem;
    line-height: 1.8rem;
  }
 
  .copy {
    display: flex;
    bottom: 0;
    padding-left: 1rem;
    background-color: ${({theme}) => theme.footerCopy};
    height: 3rem;
    justify-content: left;
    align-items: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1rem;
  }

  @media only screen and ${device.tablet} {
    .footer .about p {
      font-size: 1.6rem;
      line-height: 2.2rem;
    }
    .copy {
      height: 5rem;
      font-size: 1.4rem;
    }
  }

  @media print  {
    .footer {
      display: none;
    }
    .copy {
      display: none;
    }
  }
`

export default StyledFooter
