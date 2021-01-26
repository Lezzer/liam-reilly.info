import styled from "styled-components";

const StyledSiteContainer = styled.section`
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-rows: 1fr auto 1fr;
  grid-template-areas:
        "header"
        "content"
        "footer";
`

export default StyledSiteContainer