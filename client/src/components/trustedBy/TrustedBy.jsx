import React from 'react'
import './TrustedBy.scss'

const TrustedBy = () => {
  return (
    <div className='trustedBy'>
        <div className='container'>
            <span>Trusted By:</span>
            <img 
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/meta.12b5e5c.png" 
                alt="Facebook"
            />
            <img 
                src="	https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/google.61e78c8.png" 
                alt="Google"
            />
            <img 
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/netflix.96c5e3f.png" 
                alt="Netflix"
            />
            <img 
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/pandg.0f4cfc2.png" 
                alt="P&G"
            />
            <img 
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/paypal.305e264.png" 
                alt="PayPal"
            />
        </div>
        </div>
  )
}

export default TrustedBy