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
            <Link href="/resume" as="/resume">
            <a>resume</a>
            </Link>
        </li>
        <li>
            <Link href="/contact" as="/contact">
            <a>contact</a>
            </Link>
        </li>
        <li>
            <Link href="https://github.com/liam-reilly" target={'_blank'}>
                <a>github</a>
            </Link>
        </li>
        {/*<li>*/}
        {/*    /!*<Link href="/">*!/*/}
        {/*        <a href={"./index.html"}>home</a>*/}
        {/*    /!*</Link>*!/*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*    /!*<Link href="/resume">*!/*/}
        {/*        <a href={"./resume.html"}>resume</a>*/}
        {/*    /!*</Link>*!/*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*    /!*<Link href="/contact">*!/*/}
        {/*        <a href={"./contact.html"}>contact</a>*/}
        {/*    /!*</Link>*!/*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*    <Link href="https://github.com/liam-reilly" target={'_blank'}>*/}
        {/*        <a>github</a>*/}
        {/*    </Link>*/}
        {/*</li>*/}
    </ul>
</StyledMenu>

export default Menu