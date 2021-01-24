import React from "react"
import StyledHeader from "./header.styled"
import Menu from "../menu"

const Header = () => <StyledHeader>
    <img
        id="avatar"
        alt="avatar image"
        src='https://www.gravatar.com/avatar/7810a5172f51c37bcba95f5055b0d57e?s=175' />
        <Menu/>
</StyledHeader>

export default Header