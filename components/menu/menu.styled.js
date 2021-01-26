import styled from "styled-components"
import {device} from "../../style/device"

const StyledMenu = styled.div`

  .menu {
    justify-items: center;
    align-items: center;
    color: ${({theme}) => theme.alternativeColor};
    text-transform: uppercase;
    padding: 0;
  }
  
  ul li {
    display: inline;
    font-size: 1.4rem;
    border-right: 2px solid ${({theme}) => theme.highlight};
  }

  ul li:last-child {
    border: none;
  }

  a {
    font-size: 1.3rem;
    padding: 0 .5rem;
    line-height: 2rem;
    transition: font-size .5s ease;
  }

  @media only screen and ${device.tablet} {
    
    .menu {
      height: 3rem;
      margin: 2rem;
    }

    ul li {
      padding: 0 1.5rem;
      font-size: 2.5rem;
    }
    
    a {
      font-size: 2.5rem;
    }

    a:hover {
      color: ${({theme}) => theme.highlight};
      font-size: 3rem;
    }
  }
`

export default StyledMenu