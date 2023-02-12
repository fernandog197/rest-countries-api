import React from 'react'

import Card from '../Card/Card'

import './cardgrid.css'

const CardGrid = ({ data }) => {
    
    return (
        <div className='cardgrid__container'>
            {
                data.map((c) => (
                    <Card 
                        name={c.name}
                        population={c.population}
                        region={c.region}
                        capital={c.capital}
                        flag={c.flags.svg}
                    />
                ))
            }
        </div>
    )
}

export default CardGrid