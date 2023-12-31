import React from 'react'
import './CatCard.scss'
import {Link} from 'react-router-dom'

const CatCard = ({item}) => {
  return (
    <Link to='/gigs?search=title'>
        <div className='catCard'>
            <img src={item.imageURL}/>
            <span className='description'>{item.description}</span>
            <span className='title'>{item.title}</span>
        </div>
    </Link>
    
  )
}

export default CatCard
