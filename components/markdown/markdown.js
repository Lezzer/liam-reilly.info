import MarkdownRenderer from "react-markdown-renderer"

const Markdown = ({ source }) => {

    const content = require(`/public/static/blog/${source}`)

    return <MarkdownRenderer markdown={ content.default }>

    </MarkdownRenderer>
}

export default Markdown