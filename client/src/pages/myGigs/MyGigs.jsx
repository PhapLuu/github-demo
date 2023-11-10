import React from 'react'
import "./MyGigs.scss"
import { Link} from 'react-router-dom'

const MyGigs = () => {
  return (
    <div className='myGigs'>
      <div className='container'>
        <div className='title'>
          <h1>Gigs</h1>
          <Link to='/add'>
              <button>Add New Gig</button>
          </Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img src='https://i.pinimg.com/736x/96/be/e1/96bee128e75d3ce04956750517f46a3f.jpg'/>
            </td>
            <td>Gig1</td>
            <td>$88</td>
            <td>123</td>
            <td><i className="fa-solid fa-trash"></i></td>
          </tr>

          <tr>
            <td>
              <img src='https://i.pinimg.com/736x/96/be/e1/96bee128e75d3ce04956750517f46a3f.jpg'/>
            </td>
            <td>Gig1</td>
            <td>$88</td>
            <td>123</td>
            <td><i className="fa-solid fa-trash"></i></td>
          </tr>

          <tr>
            <td>
              <img src='https://i.pinimg.com/736x/96/be/e1/96bee128e75d3ce04956750517f46a3f.jpg'/>
            </td>
            <td>Gig1</td>
            <td>$88</td>
            <td>123</td>
            <td><i className="fa-solid fa-trash"></i></td>
          </tr>

          <tr>
            <td>
              <img src='https://i.pinimg.com/736x/96/be/e1/96bee128e75d3ce04956750517f46a3f.jpg'/>
            </td>
            <td>Gig1</td>
            <td>$88</td>
            <td>123</td>
            <td><i className="fa-solid fa-trash"></i></td>
          </tr>

          <tr>
            <td>
              <img src='https://i.pinimg.com/736x/96/be/e1/96bee128e75d3ce04956750517f46a3f.jpg'/>
            </td>
            <td>Gig1</td>
            <td>$88</td>
            <td>123</td>
            <td><i className="fa-solid fa-trash"></i></td>
          </tr>
          
        </table>
      </div>
    </div>
  )
}

export default MyGigs