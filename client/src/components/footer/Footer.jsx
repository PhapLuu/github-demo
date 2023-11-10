import React from 'react'
import './Footer.scss'
const Footer = () => {
  return (
    <>
    <hr/>
    <div className='footer'>
      <div className='container'>
        <div className='top'>
          <div className='item'>
            <h2>Categories</h2>
            <div>Graphics & Design</div>
            <div>Digital Marketing</div>
            <div>Writing & Translation</div>
            <div>Video & Animation</div>
            <div>Music & Audio</div>
            <div>Fiverr Logo Maker</div>
            <div>Programming & Tech</div>
            <div>Data</div>
            <div>Business</div>
            <div>Lifestyle</div>
            <div>Photography</div>
            <div>End-to-End Projects</div>
            <div>Sitemap</div>
          </div>
          <div className='item'>
            <h2>About</h2>
            <div>Careers</div>
            <div>Press & News</div>
            <div>Partnerships</div>
            <div>Privacy Policy</div>
            <div>Terms of Service</div>
            <div>Intellectual Property Claims</div>
            <div>Investor Relations</div>
          </div>
          <div className='item'>
            <h2>Support and Education</h2>
            <div>Help & Support</div>
            <div>Trust & Safety</div>
            <div>Selling on Fiverr</div>
            <div>Buying on Fiverr</div>
            <div>Fiverr Guides</div>
            <div>Fiverr Workspace</div>
            <div>Learn</div>
          </div>
          <div className='item'>
            <h2>Community</h2>
            <div>Customer Success Stories</div>
            <div>Community Hub</div>
            <div>Forum</div>
            <div>Events</div>
            <div>Blog</div>
            <div>Influencers</div>
            <div>Affiliates</div>
            <div>Podcast</div>
            <div>Invite a Friend</div>
            <div>Become a Seller</div>
            <div>Community Standards</div>
          </div>
          <div className='item'>
            <h2>Business Solutions</h2>
            <div>About Business Solutions</div>
            <div>Fiverr Pro</div>
            <div>Fiverr Certified</div>
            <div>Fiverr Enterprise</div>
            <div>ClearVoice</div>
            <div>Working Not Working</div>
            <div>Contact Sales</div>
          </div>
        </div>
        <hr/>
        <div className='bottom'>
          <div className='logo'>
            <h1>fiverr</h1>
            <span>© Fiverr International Ltd. 2023</span>
          </div>
          <div className='link'>
            <div className='social'>
              <span>
                <i className="fa-brands fa-github"></i>
              </span>
              <span>
                <i className="fa-brands fa-facebook"></i>
              </span>
              <span>
                <i className="fa-brands fa-instagram"></i>
              </span>
              <span>
                <i className="fa-brands fa-linkedin"></i>
              </span>
            </div>
            <div className='addition'>
              <i className="fa-solid fa-globe"></i>
              <span>English</span>
            </div>
            <div className='addition'>
              <span>$ USD</span>
            </div>
            <div className='addition'>
            <i className="fa-solid fa-person"></i>
            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}

export default Footer