import React from 'react'
import ImageSlider from './ImageSlider';

const slides = [
    {url: './images/01.jpg',title:"Amazon Essentials"},
    {url: './images/02.png',title:"Cosmatics"},
    {url: './images/03.gif',title:"International Brands"},
]
function Carousel() {
  return (
    <div style={containerStyles}>
        <ImageSlider slides={slides}/>
    </div>
  )
}

export default Carousel

const containerStyles = {
    width: '500px',
    height : '280px',
    margin: '0 auto'
}