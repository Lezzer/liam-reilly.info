import styled from "styled-components"
import {device} from "../../style/device"

const StyledMenu = styled.ul`
  justify-content: center;
  display: flex;
  color: ${({theme}) => theme.alternativeColor};
  text-transform: uppercase;
  margin: 1rem;
  padding: 0;
  
  a {
    font-size: 1.6rem;
    padding-left: 1rem;
    padding-right: 1rem;
    border-right: 1px solid ${({theme}) => theme.highlight};
  }
  
  a:last-child {
    border: none;
  }

  @media only screen and ${device.tablet} {
    a {
      font-size: 2.5rem;
    }
  }
`

export default StyledMenu