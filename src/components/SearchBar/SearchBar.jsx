import { useState } from 'react'

import { BsSearch } from 'react-icons/bs'

import './searchbar.css'

const SearchBar = () => {
    const [country, setCountry] = useState('')

    const handleChange = (e) => {
        setCountry(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className='searchbar__container'>
            <form onSubmit={handleSubmit} className="searchbar__input">
                <input type="text" name='country' value={country} className='searchbar__input-input' placeholder='Search for a country...' onChange={handleChange} />
                <button type='submit' className='searchbar__button'>{<BsSearch className='searchbar__button-icon' />}</button>
            </form>
            <select name="region" className='searchbar__region'>
                <option hidden disabled selected value>Filter By Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    )
}

export default SearchBar