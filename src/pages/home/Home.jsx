import React from 'react'
import "./style.scss"
import HeroBanner from './heroBanner/HeroBanner'
import Trending from './trending/Trending'
import Popular from './popular/Popular'
import TopRated from './topRated/TopRated'

const Home = () => {
  return (
    <div>
        <HeroBanner/>
        <Trending />
        <Popular />
        <TopRated />
        {/* <div style={{height: 500}}></div> */}
    </div>
  )
}

export default Home