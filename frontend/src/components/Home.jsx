import React from 'react'
import Header from './Header'
import Carousel from './Carousel'
import "../styles/home.css"
function Home() {
  return (
    <div>
        <Header/>
        <Carousel/>
        <div className='third-component'>
          <div>
            <Carousel />
            <Header />
          </div>
        </div>
    </div>
  )
}

export default Home