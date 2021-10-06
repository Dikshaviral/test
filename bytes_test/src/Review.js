import React from 'react'
import './Review.css'

const Review = (props) => {
    return (
        <div className="review">
             <div className="rev_content">
                <h1>{props.name}</h1>
                <p>{props.review}</p>
            </div>
            <img src={props.image} alt="dl"></img>
        </div>
    )
}

export default Review
