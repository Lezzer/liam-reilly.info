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
      padding: 0;
      list-style: none;
    }

    ul li {
      font-weight: bold;
      padding-bottom: 1rem;
    }

    ul li span {
      padding-left: .5rem;
      font-weight: 300;
    }

    p {
      padding: 0;
      font-size: 1rem;
    }


    h2 {
      font-size: 3rem;
      font-weight: 400;
      margin: 2rem;
    }
  }
`

export default StyledResumeTechSkills