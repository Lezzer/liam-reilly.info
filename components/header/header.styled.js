import styled from "styled-components"
import {device} from "../../style/device"

const StyledHeader = styled.section`
  
  .header {
    display: grid;
    grid-area: header;
    
    justify-items: center;
    background-color: ${({theme}) => theme.header};
  }
  
  .avatar {
    height: 10rem;
    border-radius: 1rem;
    transition: height 1s ease;
    margin: .5rem;
  }

  @media only screen and ${device.laptop} {
    .avatar {
      height: 15rem;
      margin: 1.25rem 0 0.8rem 0;
    }
  }
`

export default StyledHeader