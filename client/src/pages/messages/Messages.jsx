import React from "react";
import "./Messages.scss";
import {Link} from 'react-router-dom'

const Messages = () => {
  const currentUser = {
    id: 1,
    username: 'John Doe',
    isSeller: true,
  };
  const message = 'Bee pitch card snake bank give stream mysterious drawn oldest happen national box castle suit available frighten visit couple partly branch nearby factory valleyOrder1';
  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr className="heading">
            <th>{currentUser?.isSeller ? "Buyers" : "Seller"}</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className="body active">
            <td>John Doe</td>
            <td><Link className="link" to='/message/123'>{message.substring(0,100)+'...'}</Link></td>
            <td>1 hour ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr className="body active">
            <td>John Doe</td>
            <td><Link className="link" to='/message/123'>{message.substring(0,100)+'...'}</Link></td>
            <td>1 hour ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr className="body ">
            <td>John Doe</td>
            <td><Link className="link" to='/message/123'>{message.substring(0,100)+'...'}</Link></td>
            <td>1 hour ago</td>
          </tr>
          <tr className="body ">
            <td>John Doe</td>
            <td><Link className="link" to='/message/123'>{message.substring(0,100)+'...'}</Link></td>
            <td>1 hour ago</td>
          </tr>
          <tr className="body ">
            <td>John Doe</td>
            <td><Link className="link" to='/message/123'>{message.substring(0,100)+'...'}</Link></td>
            <td>1 hour ago</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Messages;
