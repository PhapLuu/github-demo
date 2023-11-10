import React from 'react'
import "./Message.scss"
import {Link} from 'react-router-dom'

const Message = () => {
  return (
    <div className='message'>
      <div className='container'>

        <span className='breadCrumbs'>
          <Link className='link' to='/messages'>
            MESSAGES
          </Link> 
          /
          <Link className='link'>
            JOHN DOE
          </Link>
          /MESSAGE
        </span>

        <div className='messages'>
          <div className='item'>
            <img src='https://i.pinimg.com/564x/5d/de/b0/5ddeb076dbb616af8e67e357aff5feb7.jpg'/>
            <p>
              writing possibly who earth afraid in seen wonderful environment dull somebody sun hurry plane myself transportation soil just respect properly perfectly bat still compass
            </p>
          </div>
          <div className='item owner'>
            <img src='https://i.pinimg.com/564x/5d/de/b0/5ddeb076dbb616af8e67e357aff5feb7.jpg'/>
            <p>
              writing possibly who earth afraid in seen wonderful environment dull somebody sun hurry plane myself transportation soil just respect properly perfectly bat still compass
            </p>
          </div>
          <div className='item'>
            <img src='https://i.pinimg.com/564x/5d/de/b0/5ddeb076dbb616af8e67e357aff5feb7.jpg'/>
            <p>
              writing possibly who earth afraid in seen wonderful environment dull somebody sun hurry plane myself transportation soil just respect properly perfectly bat still compass
            </p>
          </div>
          <div className='item owner'>
            <img src='https://i.pinimg.com/564x/5d/de/b0/5ddeb076dbb616af8e67e357aff5feb7.jpg'/>
            <p>
              writing possibly who earth afraid in seen wonderful environment dull somebody sun hurry plane myself transportation soil just respect properly perfectly bat still compass
            </p>
          </div>
          <div className='item'>
            <img src='https://i.pinimg.com/564x/5d/de/b0/5ddeb076dbb616af8e67e357aff5feb7.jpg'/>
            <p>
              writing possibly who earth afraid in seen wonderful environment dull somebody sun hurry plane myself transportation soil just respect properly perfectly bat still compass
            </p>
          </div>
          <div className='item owner'>
            <img src='https://i.pinimg.com/564x/5d/de/b0/5ddeb076dbb616af8e67e357aff5feb7.jpg'/>
            <p>
              writing possibly who earth afraid in seen wonderful environment dull somebody sun hurry plane myself transportation soil just respect properly perfectly bat still compass
            </p>
          </div>
          <div className='item'>
            <img src='https://i.pinimg.com/564x/5d/de/b0/5ddeb076dbb616af8e67e357aff5feb7.jpg'/>
            <p>
              writing possibly who earth afraid in seen wonderful environment dull somebody sun hurry plane myself transportation soil just respect properly perfectly bat still compass
            </p>
          </div>
          <div className='item owner'>
            <img src='https://i.pinimg.com/564x/5d/de/b0/5ddeb076dbb616af8e67e357aff5feb7.jpg'/>
            <p>
              writing possibly who earth afraid in seen wonderful environment dull somebody sun hurry plane myself transportation soil just respect properly perfectly bat still compass
            </p>
          </div>
        </div>
        <hr/>
        <div className='write'>
          <textarea name='Write a message' id='' cols='30' rows='10' placeholder='Text your message'></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Message