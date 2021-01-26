import styled from "styled-components";

const StyledResumeHeader = styled.section`
  text-align: center;
  width: 100%;
  font-size: 1.1rem;
  font-weight: 300;

  span {
    font-weight: 200;
  }
  
  svg {
    padding-right: 4px;
  }
  
  .location {
    text-transform: capitalize;
  }

  @media only screen and (min-width: 960px) {
    font-size: 2rem;
    
    span {
      padding: 0 2rem;
    }
    
    svg {
      padding-right: 10px;
    }

  }
`

export default StyledResumeHeader