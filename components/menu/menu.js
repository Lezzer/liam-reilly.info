import React from "react"
import StyledMenu from "./menu.styled"
import Link from "next/link"

const Menu = () => <StyledMenu>
    <ul className={"menu"}>
        <li>
            <Link href="/" as="/">
            <a>home</a>
            </Link>
        </li>
        <li>
            <Link href="/resume" as="/resume.html">
            <a>resume</a>
            </Link>
        </li>
        <li>
            <Link href="/contact" as="/contact.html">
            <a>contact</a>
            </Link>
        </li>
        <li>
            <Link href="/books" as="/books.html">
                <a>books</a>
            </Link>
        </li>
        <li>
            <Link href="https://github.com/liam-reilly">
                <a target={'_blank'}>github</a>
            </Link>
        </li>
    </ul>
</StyledMenu>

export default Menu