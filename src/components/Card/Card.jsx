import React from 'react'

import './card.css'

const Card = ({ name, population, region, capital, flag }) => {
    
    return (
        <div className='card__container homepage-items'>
            <div className="card__flag-container">
                <img className='card__flag' src={flag} alt="name" />
            </div>
            <div className="card__data-container">
                <h3>{name}</h3>
                <div className="card__data">
                    <div className="card__data-each">
                        <strong>Population:</strong>
                        <p>{population}</p>
                    </div>

                    <div className="card__data-each">
                        <strong>Region:</strong>
                        <p>{region}</p>
                    </div>

                    <div className="card__data-each">
                        <strong>Capital:</strong>
                        <p>{capital}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card