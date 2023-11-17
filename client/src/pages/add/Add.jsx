import React, { useState } from 'react'
import "./Add.scss"
import newRequest from '../../utils/newRequest';
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [cats, setCats] = useState([]);
  const [desc, setDesc] = useState('');
  const [shortDesc, setShortDesc] = useState('');
  const [deliveryTime, setDeliveryTime] = useState(0);
  const [revisionNumber, setRevisionNumber] = useState(0);
  const [price, setPrice] = useState(0)
  const [error, setError] = useState(null)
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await newRequest.post('/gigs/',{
        isSeller: currentUser.isSeller,
        title,
        desc,
        shortDesc,
        deliveryTime,
        revisionNumber,
        price,
      });
    navigate('/');
    } catch (error) {
      setError(error.response.data)
           
    }
  }
  return (
    <div className='add'>
      <div className='container'>
      <form onSubmit={handleSubmit}>
        <h1>Add New Gig</h1>
        <div className='sections'>
          <div className='left'>
            <label htmlFor=''>Title</label>
            <input 
              type='text' 
              placeholder='e.g. I will do sth'
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor=''>Category</label>
            <select name='cats' id='cats'>
              <option value='design'>Design</option>
              <option value='web'>Web Development</option>
              <option value='animation'>Animation</option>
              <option value='music'>Music</option>
            </select>
            <label className='coverImageLabel' htmlFor='coverImage'>
              Attach Cover Image
              <i className="fa-solid fa-file"></i>
            </label>
            <input type='file' id='coverImage'/>
            <label className='uploadImageLabel' htmlFor='uploadImage'>
              Upload Images
              <i className="fa-solid fa-file"></i>
            </label>
            <input type='file' id='uploadImage' multiple/>
            <label htmlFor=''>Description</label>
            <textarea 
              name='desc' 
              id='' 
              cols='30' 
              rows='16' 
              placeholder='Brief description to introduce your service to customers'
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
            <button type='submit'>Create</button>
          </div>
          <div className='right'>
            <label>Service Title</label>
            <input type='text' placeholder='e.g. One-page web design'/>
            <label>Short Description</label>
            <textarea 
              name='shortDesc' 
              id='' 
              cols='30' 
              rows='10' 
              placeholder='Short description of your service'
              onChange={(e) => setShortDesc(e.target.value)}
            ></textarea>
            <label>Delivery Time(e.g. 3 days)</label>
            <input 
              type='number' 
              name='deliveryTime' 
              min={1}
              onChange={(e) => setDeliveryTime(e.target.value)}
            />
            <label>Revision Number</label>
            <input 
              type='number' 
              name='revisionNumber' 
              min={1}
              onChange={(e) => setRevisionNumber(e.target.value)}
            />
            <label>Add Features</label>
            <input type='text' placeholder='e.g. page design'/>
            <input type='text' placeholder='e.g. file uploading'/>
            <input type='text' placeholder='e.g. setting up a domain'/>
            <input type='text' placeholder='e.g. hosting'/>
            <label>Price</label>
            <input 
              type='number' 
              min={1} 
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Add
