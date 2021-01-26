import styled from "styled-components"
import { device } from "../../style/device"

const StyledPost = styled.article`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 1rem auto 2rem auto;
  padding: 1rem;
  background-color: ${({theme}) => theme.background};
  box-shadow: .1rem .1rem 1rem .5rem ${({theme}) => theme.alternativeColor};
  border: 2px solid ${({theme}) => theme.alternativeHighlight};
  font-size: 1.4rem;
  
  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  hr {
    display: block;
    border: 0 solid #000;
    border-bottom: 1px solid #C21F39;
    width: 100%;
  }

  .calendar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.alternativeHighlight};
    color: ${({theme}) => theme.background};
    font-size: 1rem;
    height: 3rem;
    width: 3rem;
  }

  .title {
    color: ${({theme}) => theme.alternativeHighlight};
    margin: 0 0 0 1rem;
    font-size: 1rem;
    width: 50%;
  }
  
  p {
    line-height: 2.5rem;
  }

  p:first-child {
    margin-top: 1rem;
  }
  p:last-child {
    margin-bottom: 1rem;
  }

  .post_link {
    font-size: 1.4rem;
    padding: .5rem 0 .5rem 0;
  }

  .post_link a {
    color: #C21F39;
    border-bottom: #C21F39 1px dashed;
  }
  .post_link a:visited {
    color: #C21F39;
  }

  @media only screen and ${device.laptop} {
    font-size: 2rem;

    .calendar {
      min-width: 5rem;
      min-height: 5rem;
      font-size: 1.75rem;
    }
    
    .title {
      font-size: 3rem;
      padding: 1rem;
    }

    p {
      line-height: 3rem;
    }
    
    .post_link {
      font-size: 2rem;
      padding: .5rem 0 .5rem 0;
    }
  }
  
`

export default StyledPost