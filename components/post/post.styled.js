import styled from "styled-components"
import { device } from "../../style/device"

const StyledPost = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 1rem auto 2rem auto;
  padding: 1rem;
  background-color: ${({theme}) => theme.background};
  box-shadow: .1rem .1rem 1rem .5rem ${({theme}) => theme.alternativeColor};
  border: 2px solid ${({theme}) => theme.alternativeHighlight};
  font-size: 1.4rem;
  
  blockquote{
    border-left: #C21F39 solid 3px;
    line-height: 2rem;
    padding-left: 1rem;
    margin: 1rem;
  }
  
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between
  }

  h1 {
    text-decoration: underline ;
    text-decoration-color: #C21F39;
  }
  
  strong {
    text-decoration: underline ;
    text-decoration-color: #C21F39;
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
    display: flex;
    color: ${({theme}) => theme.alternativeHighlight};
    font-size: 1.2rem;
    font-weight: bold;
    align-items: center;
    text-decoration: underline;
  }
  
  p {
    line-height: 2.5rem;

    img {
      display: block;
      max-width: 50%;
      margin: auto;
    }
    
    a {
      color: #C21F39;
      border-bottom: #C21F39 1px dashed;
    }
    a:visited {
      color: #C21F39;
    }
  }

  p:first-child {
    margin-top: 1rem;
  }
  p:last-child {
    margin-bottom: 1rem;
  }
  
  ul {
    padding-inline-start: 0;
    padding: 1rem;
    list-style: none;
    //line-height: 2rem;
  }
  
  li {
    svg { 
      font-size: 1.2rem;
      color: #C21F39 
    }
    
    span:before {
      content: ' '
    }
    span {
      font-size: 1.2rem;
      font-weight: lighter;
    }
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

  @media only screen and ${device.tablet} {
    font-size: 2rem;
    margin: 1rem auto 2rem auto;

    blockquote{
      border-left: #C21F39 solid 5px;
      line-height: 5rem;
      padding-left: 2rem;
    }
    
    .calendar {
      min-width: 5rem;
      min-height: 5rem;
      font-size: 1.75rem;
    }
    
    .title {
      font-size: 3rem;
    }

    p {
      line-height: 3rem;
    }

    ul {
      line-height: 3rem;
    }

    li {
      svg {
        font-size: 1.8rem;
        color: #C21F39
      }
      span {
        font-size: 1.8rem;
      }
    }
    
    
    .post_link {
      font-size: 2rem;
      padding: .5rem 0 .5rem 0;
    }
  }
  
`

export default StyledPost