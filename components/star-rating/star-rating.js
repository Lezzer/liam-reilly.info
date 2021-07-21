import { RatingStyled } from "./star-rating.styled";

const StarRating = ({ stars }) => {

    let starsArray = []
    for (let i = 0; i < stars; i++) {
        starsArray.push("☆")
    }

    return <RatingStyled>
        {
            starsArray.map((star, index) =>
                <span key={ index }>{star}</span>)
        }
    </RatingStyled>;
}

export default StarRating