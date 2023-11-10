import React from 'react'
import "./Orders.scss"
import {Link} from 'react-router-dom'

const Orders = () => {

  const currentUser = {
    id: 1,
    username: 'John Doe',
    isSeller: true,
  };

  return (
    <div className='orders'>
      <div className='container'>
        <div className='title'>
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller ? 'Buyers' : 'Seller'}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img src='https://i.pinimg.com/736x/96/be/e1/96bee128e75d3ce04956750517f46a3f.jpg'/>
            </td>
            <td>Order1</td>
            <td>$88</td>
            <td>123</td>
            <td><i className="fa-solid fa-envelope"></i></td>
          </tr>

          <tr>
            <td>
              <img src='https://i.pinimg.com/736x/96/be/e1/96bee128e75d3ce04956750517f46a3f.jpg'/>
            </td>
            <td>Order2</td>
            <td>$88</td>
            <td>123</td>
            <td><i className="fa-solid fa-envelope"></i></td>
          </tr>

          <tr>
            <td>
              <img src='https://i.pinimg.com/736x/96/be/e1/96bee128e75d3ce04956750517f46a3f.jpg'/>
            </td>
            <td>Order3</td>
            <td>$88</td>
            <td>123</td>
            <td><i className="fa-solid fa-envelope"></i></td>
          </tr>

          <tr>
            <td>
              <img src='https://i.pinimg.com/736x/96/be/e1/96bee128e75d3ce04956750517f46a3f.jpg'/>
            </td>
            <td>Order4</td>
            <td>$88</td>
            <td>123</td>
            <td><i className="fa-solid fa-envelope"></i></td>
          </tr>

          <tr>
            <td>
              <img src='https://i.pinimg.com/736x/96/be/e1/96bee128e75d3ce04956750517f46a3f.jpg'/>
            </td>
            <td>Order5</td>
            <td>$88</td>
            <td>123</td>
            <td><i className="fa-solid fa-envelope"></i></td>
          </tr>
          
        </table>
      </div>
    </div>
  )
}

export default Orders