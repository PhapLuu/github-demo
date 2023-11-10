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
                <img src='https://i.pinimg.com/564x/b4/3a/89/b43a892e3f68c50a5b7ce996aa41a1af.jpg'/>
            </div>
        </div>
    </div>
  )
}

export default Featured