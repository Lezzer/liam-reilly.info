import styled from "styled-components"
import {device} from "../../style/device"

const StyledHeader = styled.section`
  display: grid;
  grid-area: header;
  background-color: ${({theme}) => theme.header};
  flex-direction: column;
  justify-content: center;
  justify-items: center;

  img {
    align-self: center;
    height: 10rem;
    border-radius: 1rem;
    transition: height 1s ease;
    margin: .5rem;
  }

  @media only screen and ${device.laptop} {
    img {
      height: 15rem;
      transition: height 1s ease;
      margin: 1.25rem 0 0.8rem 0;
    }
  }
`

export default StyledHeader