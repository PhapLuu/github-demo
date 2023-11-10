import React from 'react'
import './GigCard.scss'
import { Link } from 'react-router-dom'

const GigCard = ({item}) => {
  return (
    <Link className='link' to='/gig/123'>
        <div className='gigCard'>
            <img src={item.img}/>
            <div className='info'>
                <div className='user'>
                    <img src={item.pp} />
                    <span>{item.username}</span>
                </div>
                <p> {item.desc} </p>
                <div className='star'>
                    <i className="fa-solid fa-star"></i>
                    <span>{item.star}</span>
                </div>
            </div>
            <hr/>
            <div className='details'>
                <i class="fa-regular fa-heart"></i>
                <div className='price'>
                    <span>Starting At</span>
                    <h2>${item.price}</h2>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default GigCard