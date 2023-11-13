import React, { useState } from 'react'
import "./Navbar.scss"
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const [activeAddition,setActiveAddition] = useState(false)
    const [active, setActive] = useState(false)
    const [open, setOpen] = useState(false)
    const {pathname} = useLocation()

    const isActive = () =>{
        window.scrollY > 0 ? setActive(true) : setActive(false)
        window.scrollY > 200 ? setActiveAddition(true) : setActiveAddition(false)
    }
    useEffect(() => {
        window.addEventListener('scroll', isActive);
        return () => {
            window.removeEventListener('scroll', isActive);
        }
    },[])
    
    const currentUser = {
        id: 1,
        username: 'John Doe',
        isSeller: true,
    }
  return (
    <div className={(active || pathname!=='/') ? 'navbar active' : 'navbar'}>
        <div className='container'>
            <div className='logo'>
            <Link className='link' to='/'>
                <span className='logo__text'> Logo </span>
            </Link>
                <span className='logo__dot'>.</span>
            </div>
            <div className='links'>
                <span>Business</span>
                <span>Explore</span>
                <span>English</span>
                { !(currentUser?.isSeller) && <span>Become a seller</span>}
                
                <Link className='link' to='/login'>
                    <span>Sign in</span>
                </Link>
                { !currentUser && <button>Join</button>}
                
                { currentUser && (
                    <div className='user' onClick={() => setOpen(!open)}>
                        <img src='https://i.pinimg.com/564x/b7/0a/f6/b70af66aee1fb2b27a16477b5b5472a7.jpg'/>
                        <span>{currentUser?.username}</span>
                        { open && (
                        <div className='options'>
                            {
                                currentUser?.isSeller && (
                                    <>
                                        <Link className='link' to='/gigs'>
                                            <span>Gigs</span>
                                        </Link>
                                        <Link className='link' to='add'>
                                            <span>Add New Gig</span>
                                        </Link>
                                    </>
                            )}
                            <Link className='link' to='orders'>
                                <span>Orders</span>
                            </Link>
                            <Link className='link' to='messages'>
                                <span>Messages</span>
                            </Link>
                            <Link className='link' to='logout'>
                                <span>Logout</span>
                            </Link>
                        </div>
                        )}
                    </div>
                )}
            </div>

        </div>
        
        { (activeAddition ||pathname!=='/') &&
        (<>
        <hr /> 
        <div className='menu'>
            <Link className='link' to='/'>
                <span>Graphics & Design</span>
            </Link>
            <Link className='link' to='/'>
                <span>Programming & Tech</span>
            </Link>
            <Link className='link' to='/'>
                <span>Digital Marketing</span>
            </Link>
            <Link className='link' to='/'>
                <span>Video & Animation</span>
            </Link>
            <Link className='link' to='/'>
                <span>Writing & Translation</span>
            </Link>
            <Link className='link' to='/'>
                <span>Music & Audio</span>
            </Link>
            <Link className='link' to='/'>
                <span>Business</span>
            </Link>
            <Link className='link' to='/'>
                <span>Data</span>
            </Link>
            <Link className='link' to='/'>
                <span>Photography</span>
            </Link>
            <Link className='link' to='/'>
                <span>Services</span>
            </Link>
        </div>
            <hr/>
        </>)
        }
    </div>
  )
}

export default Navbar