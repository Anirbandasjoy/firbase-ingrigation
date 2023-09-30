import React, { useContext } from 'react'
import { authContext } from '../../provider/Provider'

const Home = () => {
    const { name } = useContext(authContext);
    return (
        <div>Home</div>
    )
}

export default Home