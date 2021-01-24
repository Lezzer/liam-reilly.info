import React from "react"
import { PropTypes } from "prop-types"
import StyledPost from "./post.styled"

const Post = ({month, day, year, title, content, link}) => {

    const renderLinkIfSupplied = () => {
        if (!link) return "";

        return <span className={"post_link"}>{link.post_text}
                <a href={link.url}>{link.url_text}</a>
               </span>
    }

    return <StyledPost>
        <div className={"header"}>
            <div className={"calendar"}>
                <span>{day}</span>
                <span>{month}</span>
            </div>
            <span className={"title"}>{title}</span>
            <span className={"calendar"}>{year}</span>
        </div>
        <hr/>
        <div>
            {
                content.map((x, i) => <p key={i}>{x}</p>)
            }
        </div>
        <hr/>
        {
            renderLinkIfSupplied()
        }
    </StyledPost>
}

Post.propTypes = {
    month: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.shape({
        show: PropTypes.bool,
        post_text: PropTypes.string,
        url: PropTypes.string,
        url_text: PropTypes.string
    })
}

export default Post