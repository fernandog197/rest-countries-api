export const baseUrl = 'https://restcountries.com/v3.1'

export const allCountries = `${baseUrl}/all`

export const searchByName = (searchName) => {
    return `${baseUrl}/name/${searchByName}`
}

export const searchByFullName = (searchName) => {
    return `${baseUrl}/name/${searchName}?fullText=true`
}

export const searchByRegion = (searchRegion) => {
    return `${baseUrl}/region/${searchRegion}`
}