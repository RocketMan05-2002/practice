import React from 'react'
import Accordian from './components/01_accordian/inde'
import RandomColor from './components/02_random_color_generator'
import StarRating from './components/03_star_rating'

const App = () => {
  return (
    <div>
        {/* <Accordian /> */}
        {/* <RandomColor /> */}
        <StarRating noOfStars={10}/>
    </div>
  )
}

export default App
