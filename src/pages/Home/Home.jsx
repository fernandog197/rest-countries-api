import SearchBar from '../../components/SearchBar/SearchBar'
import CardGrid from '../../components/CardGrid/CardGrid'

import Data from '../../../data.json'

import './home.css'

const Home = () => {

    return (
        <div className='container home__container'>
            <SearchBar />
            <CardGrid data={Data} />
        </div>
    )
}

export default Home