import styled from "styled-components";
import {device} from "../../../style/device";

const StyledResumeExperience = styled.section`
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

  @media only screen and ${device.laptop} {
    width: 90%;

    p {
      font-size: 1.4rem;
    }

    h2 {
      font-size: 3rem;
      font-weight: 400;
      margin: 2rem;
    }
  }
`

export default StyledResumeExperience