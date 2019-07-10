import React from 'react'
import './RecipeItem.styles.scss'
import { ReactComponent as StarIcon } from '../images/star.svg'

const RecipeItem = ({name, imgUrl, rating, ratingsNumber, author}) => (
    <div className="recipeItem">
        <img src={imgUrl} className="recipeItem-image"/>
        <h3 className="recipeItem-title">{name}</h3>
        <div className="recipeItem-footer">
            <div className="recipeItem-rating">
                <StarIcon />
                <span><strong>{rating}</strong></span>
                <span>({ratingsNumber})</span>
            </div>
            <p className="recipeItem-author">by {author.toUpperCase()}</p>
        </div>
    </div>
)

export default RecipeItem