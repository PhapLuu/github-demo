import React from "react";
import "./Messages.scss";
import { Link, useParams } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import { useMutation, useQuery, useQueryClient } from "react-query";
import moment from "moment";

const Messages = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery("conversations", () =>
    newRequest.get(`/conversations`).then((res) => {
      return res.data;
    })
  );

  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.put(`/conversations/${id}`)
    },
    onSuccess:()=>{
      queryClient.invalidateQueries(["conversations"])
    }
  })

  const handleRead = (id) => {
    mutation.mutate(id);
  };

  return (
    <div className="messages">
      {isLoading ? (
        "loading"
      ) : error ? (
        "Something went wrong"
      ) : (
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
            {data.map((conversation) => (
              <tr
                key={conversation.id}
                className={+
                  ((currentUser.isSeller && !conversation.readBySeller) ||
                    (!currentUser.isSeller && !conversation.readByBuyer)) ? (
                      "body active") : ("body")
                }
              >
                <td>
                  {currentUser.isSeller
                    ? conversation.sellerId
                    : conversation.buyerId}
                </td>
                <td>
                  <Link className="link" to={`/message/${conversation.id}`}>
                    {conversation?.lastMessage?.substring(0, 100) + "..."}
                  </Link>
                </td>
                <td>{moment(conversation.updatedAt).fromNow()}</td>
                <td>
                  {((currentUser.isSeller && !conversation.readBySeller) ||
                    (!currentUser.isSeller && !conversation.readByBuyer)) && (
                      <button onClick={() => handleRead(conversation.id)}>Mark as Read</button>
                    )}
                </td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  );
};

export default Messages;
