import React from "react"
import StyledMenu from "./menu.styled"
import Link from "next/link"

const Menu = () => <StyledMenu>
    <Link href="/">
        <a>home</a>
    </Link>
    <Link href="/resume">
        <a>resume</a>
    </Link>
    <Link href="/contact">
        <a>contact</a>
    </Link>
    <Link href="https://github.com/liam-reilly" target={'_blank'}>
        <a>github</a>
    </Link>
</StyledMenu>

export default Menu