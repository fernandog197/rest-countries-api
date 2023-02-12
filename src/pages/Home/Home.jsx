import { useState, useEffect } from 'react'

import SearchBar from '../../components/SearchBar/SearchBar'
import CardGrid from '../../components/CardGrid/CardGrid'

import Data from '../../../data.json'

import { fetchAllCountries } from '../../services/fetchs'

import './home.css'

const Home = () => {
    const [renderCountries, setRenderCountries] = useState([])

    useEffect(() => {
        const allCountries = async () => {
            let data = await fetchAllCountries()
            setRenderCountries(data)
        }
        setTimeout(() => {
            allCountries()
        }, 250);
    }, [])

    return (
        <div className='container home__container'>
            <SearchBar setRenderCountries={setRenderCountries} />
            <CardGrid data={renderCountries} />
        </div>
    )
}

export default Home