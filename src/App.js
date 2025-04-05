import React from 'react'
import Accordian from './components/01_accordian/inde'
import RandomColor from './components/02_random_color_generator'
import StarRating from './components/03_star_rating'
import ImageSlider from './components/04_image_slider'

const App = () => {
  return (
    <div>
        {/* <Accordian /> */}
        {/* <RandomColor /> */}
        {/* <StarRating noOfStars={10}/> */}
        <ImageSlider url={"https://picsum.photos/v2/list"} limit={10} page={1} />
    </div>
  )
}

export default App
