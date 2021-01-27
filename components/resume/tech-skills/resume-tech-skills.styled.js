import styled from "styled-components";
import {device} from "../../../style/device";

const StyledResumeTechSkills = styled.section`
  display: flex;
  flex-direction: column;
  text-align: left;
  font-weight: 300;

  h2 {
    font-size: 2rem;
    font-weight: 400;
    text-align: center;
    text-transform: uppercase;
    margin: 0;
  }

  ul {
    font-size: 1rem;
  }

  ul li {
    font-weight: bold;
    padding-bottom: 1rem;
    list-style: none;
  }
  
  ul li span {
    padding-left: .2rem;
    font-weight: 300;
  }
  
  p {
    padding: 0;
    font-size: 1rem;
  }

  @media only screen and ${device.laptop} {
    width: 90%;

    ul {
      font-size: 1.2rem;
    }

    ul li {
      padding-bottom: 2rem;
    }

    ul li span {
      padding-left: .5rem;
      font-weight: 300;
    }

    p {
      padding: 0;
      margin-top: 0;
      font-size: 1rem;
      font-weight: 500;
    }

    h2 {
      font-size: 3rem;
      margin: 2rem;
    }
  }

  @media only print {
    h2 {
      font-size: 1.75rem;
      font-weight: 400;
      margin: .25rem;
    }

    p {
      font-size: .75rem;
      margin: .5rem;
    }

    ul li {
      font-size: .75rem;
      padding-bottom: .4rem;
    }
  }
  
`

export default StyledResumeTechSkills