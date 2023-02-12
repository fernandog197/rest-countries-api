import { useState } from 'react'
import axios from 'axios'

import { fetchByName, fetchByRegion, fetchAllCountries } from '../../services/fetchs'

import { BsSearch } from 'react-icons/bs'

import './searchbar.css'

const SearchBar = ({ setRenderCountries }) => {
    const [country, setCountry] = useState('')

    const handleSelect = async (e) => {
        console.log(e.target.value)
        if(e.target.value === "all") {
            let data = await fetchAllCountries()
            setRenderCountries(data)
            return
        }

        let data = await fetchByRegion(e.target.value)
        setRenderCountries(data)
    }

    const handleChange = (e) => {
        setCountry(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let data = await fetchByName(country)
        setRenderCountries(data)
        setCountry('')
    }

    return (
        <div className='searchbar__container'>
            <form onSubmit={handleSubmit} className="searchbar__input">
                <input type="text" name='country' value={country} className='searchbar__input-input' placeholder='Search for a country...' onChange={handleChange} />
                <button type='submit' className='searchbar__button'>{<BsSearch className='searchbar__button-icon' />}</button>
            </form>
            <select name="region" className='searchbar__region' onChange={handleSelect}>
                <option hidden disabled selected value>Filter By Region</option>
                <option value="all">All Regions</option>
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