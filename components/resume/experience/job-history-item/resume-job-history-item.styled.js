import styled from "styled-components";
import {device} from "../../../../style/device";

const StyledResumeJobHistoryItem = styled.div`
  width: 100%;
  text-align: left;
  font-size: 1.2rem;

  ul {
    padding: 0;
    margin-bottom: .52em;
    font-weight: bold;
  }
  
  li {
    display: block;
    list-style: none;
  }
  
  span {
    color: ${({theme}) => theme.footer};
  }
  
  li:after {
    content: " ";
    padding: .2rem;
    font-size: 1rem;
    color: ${({theme}) => theme.alternativeHighlight};
  }
  
  li:last-child:after {
    content: normal;
  }

  @media only screen and ${device.laptop} {
    font-size: 1.8rem;

    li {
      display: inline;
    }
    
    li:after {
      content: " // ";
      padding: 1rem;
      font-size: 3rem;
    }

  }

  @media only print {
    font-size: .75rem;

    li {
      display: inline;
      margin: 0;
      padding: 0;
    }

    li:after {
      content: " // ";
      padding: .5rem;
      font-size: 1rem;
      color: ${({theme}) => theme.foreground};
    }

    span {
      padding: .5rem 0;
      color: ${({theme}) => theme.footer};
    }

  }

`

export default StyledResumeJobHistoryItem