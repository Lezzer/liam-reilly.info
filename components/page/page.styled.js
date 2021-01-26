import styled from "styled-components"

const StyledPage = styled.section`
  background-color: ${({theme}) => theme.background};
  padding: 3rem 5rem;
  display: grid;
  grid-area: content;
`

export default StyledPage
