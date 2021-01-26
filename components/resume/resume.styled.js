import styled from "styled-components";

const StyledResume = styled.article`
  background-color: ${({theme}) => theme.background};
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 80%;
  justify-content: center;
  //align-items: center;
  //
  h1 {
    font-size: 4rem;
    font-weight: 200;
    text-transform: uppercase;
    margin: 0;
  }

  hr {
    display: block;
    border: 0 solid #000;
    border-bottom: 1px solid rgba(0,0,0,0.075);
    margin-top: 1rem;
    width: 100%;
  }
`

export default StyledResume