import React from 'react'
import './Featured.scss'

const Featured = () => {
  return (
    <div className='featured'>
        <div className='container'>
            <div className='left'>
                <h1>
                    Find the right <i>freelance</i> service, right away
                </h1>
                <div className='search'>
                    <input type='text' placeholder='Search for any service...'/>
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
                <div className='popular'>
                    <span>Popular:</span>
                    <button>Web design</button>
                    <button>WordPress</button>
                    <button>Logo Design</button>
                    <button>AI Services</button>
                </div>
            </div>
            <div className='right'>
                <img src='https://www-uploads.scaleway.com/Design_Header_Illustration_4c0436b223.webp'/>
            </div>
        </div>
    </div>
  )
}

export default Featured