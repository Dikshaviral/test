import React from 'react'
import Star from './star.jpg'
import './Card.css'

const Card = (props) => {
    return (
        <div className="product">
            <img src={Star} alt="star"></img>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
        </div>
    )
}

export default Card
