import { useCallback, useState } from 'react'
import axios from 'axios'

export const useBorderCountries = () => {
    const [borderCountries, setBorderCountries] = useState([])

    let url = 'https://restcountries.com/v3.1/alpha?codes='

    const fetchBorderCountries = useCallback(async (detail) => {
        detail[0].borders.forEach((e, i) => {
            i === 0
            ? url = `${url}${e.toLowerCase()}`
            : url = `${url},${e.toLowerCase()}`
        })

        try {
            let { data } = await axios(url)
            let countries = data.map(c => c.name.common)
            setBorderCountries(countries)
            return countries
        } catch (err) {
            console.log(err)
        }
    })

    return [borderCountries, fetchBorderCountries]
}