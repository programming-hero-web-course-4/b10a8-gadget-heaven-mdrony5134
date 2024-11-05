import React from 'react'
import Banner from '../../components/Banner/Banner'
import Gadgets from '../../components/Gadgets/Gadgets'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <div>
        <Helmet>
          <title>Gadget Haven - home</title>
        </Helmet>
        <Banner/>
        <Gadgets/>
    </div>
  )
}

export default Home