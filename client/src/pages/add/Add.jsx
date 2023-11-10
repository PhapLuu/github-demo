import React from 'react'
import "./Add.scss"

const Add = () => {
  return (
    <div className='add'>
      <div className='container'>
        <h1>Add New Gig</h1>
        <div className='sections'>
          <div className='left'>
            <label htmlFor=''>Title</label>
            <input type='text' placeholder='e.g. I will do sth'/>
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
              name='' 
              id='' 
              cols='30' 
              rows='16' 
              placeholder='Brief description to introduce your service to customers'
            ></textarea>
            <button>Create</button>
          </div>
          <div className='right'>
            <label>Service Title</label>
            <input type='text' placeholder='e.g. One-page web design'/>
            <label>Short Description</label>
            <textarea 
              name='' 
              id='' 
              cols='30' 
              rows='10' 
              placeholder='Short description of your service'
            ></textarea>
            <label>Delivery Time(e.g. 3 days)</label>
            <input type='number' min={1}/>
            <label>Revision Number</label>
            <input type='number' min={1}/>
            <label>Add Features</label>
            <input type='text' placeholder='e.g. page design'/>
            <input type='text' placeholder='e.g. file uploading'/>
            <input type='text' placeholder='e.g. setting up a domain'/>
            <input type='text' placeholder='e.g. hosting'/>
            <label>Price</label>
            <input type='number' min={1}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add
