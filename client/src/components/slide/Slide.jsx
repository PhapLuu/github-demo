import React from 'react'
import './Slide.scss'
import Slider from 'infinite-react-carousel'

const Slide = ({children, slidesToShow}) => {
  return (
    <div className='slide'>
        <div className='container'>
            <div className='popular'> Popular services</div>
            <Slider slidesToShow={slidesToShow}>
              {children}
            </Slider>
        </div>
    </div>
  )
}

export default Slide