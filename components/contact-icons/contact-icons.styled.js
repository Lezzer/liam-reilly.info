import styled from "styled-components"
import { device } from "../../style/device"

const StyledContactIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 5rem;

  @media only screen and ${device.laptop} {
    flex-direction: row;
  }
`

export default StyledContactIcons