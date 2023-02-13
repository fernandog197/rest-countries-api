import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { fetchByFullName } from '../../services/fetchs'

import { useBorderCountries } from '../../hooks/useBorderCountries'

import Spinner from '../../components/Spinner/Spinner'

import { AiOutlineArrowLeft } from 'react-icons/ai'

import './detail.css'

const Detail = () => {
    const [detail, setDetail] = useState({})
    const [borderCountries, fetchBorderCountries] = useBorderCountries(detail)
    const [getNewCountry, setGetNewCountry] = useState(false)

    const { name } = useParams()
    const navigate = useNavigate()
    
    useEffect(() => {
        const getDetail = async () => {
            let data = await fetchByFullName(name)
            setDetail(data)
            fetchBorderCountries(data)
        }
        setTimeout(() => {
            getDetail()
        }, 250);
    }, [getNewCountry])

    useEffect(() => {
        scroll(0, 0)
    }, [])

    const handleClick = () => {
        navigate('/')
    }

    const handleNavigate = (e) => {
        navigate(`/${e.target.innerHTML}`)
        setGetNewCountry(!getNewCountry)
    }
    
    return (
        Object.keys(detail).length > 0
        ? (
            detail.map(c => (
                <div className="detail__container">
                    <button className='detail__backbutton' onClick={handleClick}><AiOutlineArrowLeft />Back</button>
                    <div className="detail__data">
                        <div className='detail__img-container'>
                            <img className='detail__img' src={c.flags.svg} alt={`${c.name.common}-flag`} />
                        </div>
                        <div className="detail__data-info">
                            <h1 className='detail__title-name'>{c.name.common}</h1>
                            <div className="detail__details homepage-items">
                                <div className="detail__details-column">
                                    <div className="detail__field">
                                        <strong>Native Name:</strong>
                                        <p>{Object.values(c.name.nativeName)[0].official}</p>
                                    </div>

                                    <div className="detail__field">
                                        <strong>Population:</strong>
                                        <p>{c.population}</p>
                                    </div>

                                    <div className="detail__field">
                                        <strong>Region:</strong>
                                        <p>{c.region}</p>
                                    </div>

                                    <div className="detail__field">
                                        <strong>Sub Region:</strong>
                                        <p>{c.subregion}</p>
                                    </div>

                                    <div className="detail__field">
                                        <strong>Capital:</strong>
                                        <p>{c.capital}</p>
                                    </div>
                                </div>

                                <div className="detail__details-column">
                                    <div className="detail__field">
                                        <strong>Top Level Domain:</strong>
                                        <p>{c.tld[0]}</p>
                                    </div>

                                    <div className="detail__field">
                                        <strong>Currencies:</strong>
                                        <p>{Object.values(c.currencies)[0].name}</p>
                                    </div>

                                    <div className="detail__field">
                                        <strong>Language:</strong>
                                        <div className='detail__languages'>
                                            {
                                                Object.values(c.languages).map((l, i) => (
                                                    i === Object.values(c.languages).length - 1
                                                    ? <p>{`${l}`}</p>
                                                    : <p>{`${l}, `}</p>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="detail__bordercountries-container">
                                <strong>Border Countries:</strong>
                                <div className="detail__bordercountries">
                                    {
                                        borderCountries
                                        ? borderCountries.map(b => (
                                            <p className='detail__bordercountry' onClick={handleNavigate}>{b}</p>
                                        ))
                                        : <Spinner />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        )
        :   (
            <div className="detail__spinner">
                <div className="detail__spinner-son">
                    <Spinner />
                </div>
            </div>
        )
    )
}

export default Detail