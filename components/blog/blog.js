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

const Blog = ({ year, month }) => {
    const [ yearFilter, setYearFilter ] = useState(year)
    const [ monthFilter, setMonthFilter ] = useState(month)

    const [ posts, setPosts] = useState([])

    useEffect(() => {
        setPosts(getPosts(yearFilter, monthFilter))
    }, [yearFilter, monthFilter])

    const getPosts = (year, month) => {
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

    const filterYear = (filter) => setYearFilter(filter)
    const filterMonth = (filter) => setMonthFilter(filter)

    return <div>
        <h1>Liam's Blog</h1>
        <BlogFilterStyled>
            <H1Styled>Filter</H1Styled>
            {/*<FilterButtonStyled*/ }
            {/*    onClick={ () => filterMonth("none") }*/ }
            {/*    area={"all"}>Show All*/ }
            {/*</FilterButtonStyled>*/ }
            <FilterButtonStyled
                active={yearFilter === "2021"}
                onClick={ () => filterYear("2021") }
                area={ "twentyone" }>2021
            </FilterButtonStyled>
            <FilterButtonStyled
                active={yearFilter === "2020"}
                onClick={ () => filterYear("2020") }
                area={ "twentytwenty" }>2020
            </FilterButtonStyled>
        </BlogFilterStyled>
        {
            posts.map(p => <p key={ p.title }>{ p.title }</p>)
        }
    </div>;
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