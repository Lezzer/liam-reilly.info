import styled from "styled-components";
import {device} from "../../../style/device";

const StyledResumeHeader = styled.section`
  font-weight: 300;

  display: flex;
  justify-content: space-around;
  
  span {
    font-weight: 200;
    font-size: 1.2rem;
  }
  
  svg {
    padding-right: 5px;
  }
  
  .location {
    text-transform: capitalize;
  }

  @media only screen and ${device.laptop} {
    
    span {
      font-size: 2.5rem; 
      padding: 1rem;
    }
    
    svg {
      font-size: 2rem;
    }

  }
`

export default StyledResumeHeader