import {
    useEffect,
    useState
} from "react"
import PropTypes from "prop-types"
import {
    BlogFilterStyled,
    FilterButtonStyled,
    H1Styled
} from "./blog.styled";
import Post from "../post";
import Markdown from "../markdown/markdown";

const Blog = ({ year, month }) => {
    const [ yearFilter, setYearFilter ] = useState(year)
    const [ monthFilter, setMonthFilter ] = useState(month)
    const [ posts, setPosts ] = useState([])

    const filterYear = (filter) => setYearFilter(filter)
    const filterMonth = (filter) => setMonthFilter(filter)

    useEffect(() => {
        setPosts(getPosts())
    }, [ yearFilter, monthFilter ])

    const getPosts = () => {
        const blogs = require(`./${ yearFilter }.json`)
        const months = blogs["months"]
        let filteredPosts = []

        if (monthFilter === "none") {
            for (const m in months) {
                filteredPosts.push(months[m])
            }
            filteredPosts = [].concat.apply([], filteredPosts);
        } else {
            filteredPosts = months[monthFilter]
        }

        return filteredPosts
    }

    return <div>
        <BlogFilterStyled>
            <H1Styled>Filter</H1Styled>
            <FilterButtonStyled
                active={ yearFilter === "2021" }
                onClick={ () => filterYear("2021") }
                area={ "twentyone" }>2021
            </FilterButtonStyled>
            <FilterButtonStyled
                active={ yearFilter === "2020" }
                onClick={ () => filterYear("2020") }
                area={ "twentytwenty" }>2020
            </FilterButtonStyled>
            <FilterButtonStyled
                active={ monthFilter === "none" }
                onClick={ () => filterMonth("none") }
                area={ "all" }>ALL
            </FilterButtonStyled>
            <FilterButtonStyled
                active={ monthFilter === "jan" }
                onClick={ () => filterMonth("jan") }
                area={ "jan" }>JAN
            </FilterButtonStyled>
            <FilterButtonStyled
                active={ monthFilter === "feb" }
                onClick={ () => filterMonth("feb") }
                area={ "feb" }>FEB
            </FilterButtonStyled>
            <FilterButtonStyled
                active={ monthFilter === "mar" }
                onClick={ () => filterMonth("mar") }
                area={ "mar" }>MAR
            </FilterButtonStyled>
            <FilterButtonStyled
                active={ monthFilter === "apr" }
                onClick={ () => filterMonth("apr") }
                area={ "apr" }>APR
            </FilterButtonStyled>
            <FilterButtonStyled
                active={ monthFilter === "may" }
                onClick={ () => filterMonth("may") }
                area={ "may" }>MAY
            </FilterButtonStyled>
            <FilterButtonStyled
                active={ monthFilter === "jun" }
                onClick={ () => filterMonth("jun") }
                area={ "jun" }>JUN
            </FilterButtonStyled>
            <FilterButtonStyled
                active={ monthFilter === "jul" }
                onClick={ () => filterMonth("jul") }
                area={ "jul" }>JUL
            </FilterButtonStyled>
            <FilterButtonStyled
                active={ monthFilter === "aug" }
                onClick={ () => filterMonth("aug") }
                area={ "aug" }>AUG
            </FilterButtonStyled>
            <FilterButtonStyled
                active={ monthFilter === "sep" }
                onClick={ () => filterMonth("sep") }
                area={ "sep" }>SEPT
            </FilterButtonStyled>
            <FilterButtonStyled
                active={ monthFilter === "oct" }
                onClick={ () => filterMonth("oct") }
                area={ "oct" }>OCT
            </FilterButtonStyled>
            <FilterButtonStyled
                active={ monthFilter === "nov" }
                onClick={ () => filterMonth("nov") }
                area={ "nov" }>NOV
            </FilterButtonStyled>
            <FilterButtonStyled
                active={ monthFilter === "dec" }
                onClick={ () => filterMonth("dec") }
                area={ "dec" }>DEC
            </FilterButtonStyled>
        </BlogFilterStyled>
        {
            posts?.map(p =>
                <Post
                    day={ p.day }
                    month={ p.month }
                    year={ p.year }
                    title={ p.title }
                    anchor={ p.anchor }
                    link={ {
                        post_text: p.link?.post_text,
                        url: p.link?.url,
                        url_text: p.link?.url_text,
                        external: p.link?.external
                    } }
                >
                    {
                        <Markdown source={ p.content }/>
                    }
                </Post>)
        }
    </div>
}

Blog.propTypes = {
    year: PropTypes.string,
    month: PropTypes.string
}

Blog.defaultProps = {
    year: "2021",
    month: "july"
}

export default Blog