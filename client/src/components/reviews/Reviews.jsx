import React from "react";
import "./Reviews.scss";
import Review from "../review/Review";
import { useMutation, useQuery, useQueryClient } from "react-query";
import newRequest from "../../utils/newRequest";

const Reviews = ({ gigId }) => {
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery(
    "reviews",
    () =>
      newRequest.get(`/reviews/${gigId}`).then((res) => {
        return res.data;
      }),
    {
      enabled: true,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    }
  );

  const mutation = useMutation({
    mutationFn: (review) => {
      return newRequest.post('/reviews', review)
    },
    onSuccess:()=>{
      queryClient.invalidateQueries(["reviews"])
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    const desc = e.target[0].value;
    const star = e.target[1].value;
    if(!desc){
      return
    }
    mutation.mutate({gigId, desc, star})
  }

  return (
    <div className="reviews">
      <h2>Reviews</h2>
      {isLoading ? (
        "loading"
      ) : error ? (
        "Something went wrong"
      ) : 
      data.map((review) => (
        <Review key={review._id} review = {review}/>
      ))}
      <div className="add">
        <h3>Add a review</h3>
        <form className="addForm" action="" onSubmit={handleSubmit}>
          <input type="text" placeholder="write your opinion"/>
          <select>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
