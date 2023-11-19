import React from "react";
import "./Message.scss";
import { Link, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import newRequest from "../../utils/newRequest";

const Message = () => {
  const { id } = useParams();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery("messages", () =>
    newRequest.get(`/messages/${id}`).then((res) => {
      return res.data;
    })
  );

  const mutation = useMutation({
    mutationFn: (message) => {
      return newRequest.post(`/messages`, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["messages"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      conversationId: id,
      desc: e.target[0].value,
    });
    e.target[0].value = "";
  };

  return (
    <div className="message">
      <div className="container">
        <span className="breadCrumbs">
          <Link className="link" to="/messages">
            MESSAGES
          </Link>
          /<Link className="link">JOHN DOE</Link>
          /MESSAGE
        </span>

        {isLoading ? (
          "loading"
        ) : error ? (
          "Something went wrong"
        ) : (
          <div className="messages">
            {data.map((message) => (
              <div
                className={
                  (message.userId === currentUser._id) ? "item owner" : "item"
                }
                key={message._id}
              >
                <img src="https://i.pinimg.com/564x/5d/de/b0/5ddeb076dbb616af8e67e357aff5feb7.jpg" />
                <p>{message.desc}</p>
              </div>
            ))}
          </div>
        )}
        <hr />
        <form className="write" onSubmit={handleSubmit}>
          <textarea
            name="Write a message"
            id=""
            cols="30"
            rows="10"
            placeholder="Text your message"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Message;
