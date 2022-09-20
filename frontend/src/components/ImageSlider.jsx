import React from 'react'


function ImageSlider({slides}) {
  const [currentIndex,setCurrentIndex] = React.useState(0);
  const sliderStyle = {
    height : "100%",
    position : "relative",
  };
  const slideStyles = {
    width : "100%",
    height : "100%",
    borderRadius: "10px",
    backgroundSize : "cover",
    backgroundImage:`url(${slides[currentIndex].url})`,
  }
  const leftArrowStyles ={
    position : "absolute",
    top : "80%",
    transform : "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color : "#fff",
    zIndex : 1,
    cursor :"pointer"
  }
  const rightArrowStyles = {
    position : "absolute",
    top : "50%",
    transform : "translate(0, -50%)",
    right: "32px",
    fontSize: "45px",
    color : "#fff",
    zIndex : 1,
    cursor :"pointer"
  }
  const goToPrevious = ()=>{
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }
  const goToNext = () =>{
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
  }
  const slideShow = () =>{
    setInterval(()=>{
      if(currentIndex === slides.length - 1){
        setCurrentIndex(0);
      }else{
        setCurrentIndex(currentIndex + 1);
      }
    },8000)
  }
    return (
    <div style={sliderStyle}>
      <div style={leftArrowStyles} onClick = {goToPrevious}> ( </div>
      <div style={rightArrowStyles} onClick = {goToNext}> ) </div>
        <div style={slideStyles}>
            {slideShow()}
        </div>
    </div>
  )
}

export default ImageSlider