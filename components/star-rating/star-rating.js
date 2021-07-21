import {
    RatingStyled,
    EmptyStarStyled,
    FilledStarStyled
} from "./star-rating.styled";

const StarRating = ({ stars }) => {

    let starsArray = []
    for (let i = 0; i < stars; i++) {
        starsArray.push("☆")
    }

    const max = 5
    const empty = max - stars

    let emptyStarsArray = []
    for (let i = 0; i < empty; i++) {
        emptyStarsArray.push("☆")
    }

    return <RatingStyled>
        {
            starsArray.map((star, index) =>
                <FilledStarStyled key={`filled-star-${index}`}>{star}</FilledStarStyled>)
        }
        {
            emptyStarsArray.map((star, index) =>
                <EmptyStarStyled key={`empty-star-${index}`}>{star}</EmptyStarStyled>)
        }
    </RatingStyled>;
}

export default StarRating