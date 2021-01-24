import React from "react"
import StyledFooter from "./footer.styled"

const Footer = () => <StyledFooter>
    <div className={"footer"}>
        <div className={"about"}>
            <h1>About <a>Liam</a></h1>
            <p>Liam has been coding since childhood. Taught by his father, he instantly fell in love with being able to instruct the computer, to perform tasks he didn't want to do himself.</p>
            <p>He learned early that when it comes to software development at least, laziness can be a positive, rather than a negative.</p>
            <p>It was this profound idea, this reluctance to repeat tasks that could be automated that pushed him into a life of professional development.</p>
            <p>And rather ironically, a life of never ending learning and hard work!</p>
        </div>
    </div>
    <div className={"copy"}>
        © Liam Reilly 2021
    </div>
</StyledFooter>

export default Footer