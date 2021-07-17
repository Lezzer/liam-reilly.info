import React from "react"
import { PropTypes } from "prop-types"
import StyledPost from "./post.styled"

const Post = ({month, day, year, title, anchor, link, children}) =>
    <StyledPost>
        <div className={"header"}>
            <div className={"calendar"}>
                <span>{day}</span>
                <span>{month}</span>
            </div>
            <a href={`#${anchor}`} id={anchor} className={"title"}>{title}</a>
            <span className={"calendar"}>{year}</span>
        </div>
        <hr/>
        <div>
            {children}
        </div>
        <hr/>
        {
            link && link.external
                ? <span className={"post_link"}>{link.post_text}<a href={link.url} target={"_blank"}>{link.url_text}</a></span>
                : <span className={"post_link"}>{link.post_text}<a href={link.url}>{link.url_text}</a></span>
        }
    </StyledPost>

Post.propTypes = {
    month: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    anchor: PropTypes.string,
    link: PropTypes.shape({
        show: PropTypes.bool,
        post_text: PropTypes.string,
        url: PropTypes.string,
        url_text: PropTypes.string,
        external: PropTypes.bool
    })
}

export default Post