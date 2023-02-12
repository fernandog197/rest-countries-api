import axios from 'axios'

import { allCountries, searchByName, searchByFullName, searchByRegion } from '../constants/urls'

import Data from '../../data.json'

export const fetchAllCountries = async () => {
    try {
        let { data } = await axios(allCountries)
        return data
    } catch (err) {
        console.log(err)
        return Data        
    }
}

export const fetchByName = async (searchName) => {
    try {
        let { data } = await axios(searchByName(searchName))
        return data
    } catch (err) {
        console.log(err)
        return Data.filter((e) => e.name.toLowerCase().startsWith(searchName) || e.name.toLowerCase().includes(searchName))
    }
}

export const fetchByFullName = async (searchName) => {
    try {
        let { data } = await axios(searchByFullName(searchName))
        return data
    } catch (err) {
        console.log(err)
        return Data.filter((e) => e.name === searchName)        
    }
}

export const fetchByRegion = async (searchRegion) => {
    try {
        let { data } = await axios(searchByRegion(searchRegion))
        return data
    } catch (err) {
        console.log(err)
        return Data.filter((e) => e.region === searchRegion || e.region.toLowerCase().startsWith(searchRegion)) 
    }
}