import { useState, useEffect } from 'react'

import { CiDark, CiLight } from 'react-icons/ci'

import './navbar.css'

const Navbar = () => {
    const [light, setLight] = useState(false)

    useEffect(() => {
        light? document.body.setAttribute('data-theme', 'light'): document.body.setAttribute('data-theme', 'dark')
    }, [light])
    
    return (
        <div className='navbar__container'>
            <div className='navbar__title'>
                <h3>Where in the world?</h3>
            </div>
            <div className="navbar__darkmode">
                {
                    light
                    ? <CiLight className='navbar__icon' />
                    : <CiDark className='navbar__icon' />
                }
                <p className='navbar__darkmode-text' onClick={() => {setLight(!light)}}>{light?'Light Mode':'Dark Mode'}</p>
            </div>
        </div>
    )
}

export default Navbar