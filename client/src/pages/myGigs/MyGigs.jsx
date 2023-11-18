import React from 'react'
import "./MyGigs.scss"
import { Link} from 'react-router-dom'
import getCurrentUser from '../../utils/getCurrentUser'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import newRequest from '../../utils/newRequest'

const MyGigs = () => {
  const currentUser = getCurrentUser()
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery(
    "myGigs",
    () =>
      newRequest.get(`/gigs?userId=${currentUser._id}`).then((res) => {
        return res.data;
      }),
    
  );

  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.delete(`/gigs/${id}`)
    },
    onSuccess:()=>{
      queryClient.invalidateQueries(["myGigs"])
    }
  })

  const handleDelete = (id) =>{
    mutation.mutate(id)
  };

  return (
    <div className='myGigs'>
      {isLoading ? "loading": error ? "error" :(<div className='container'>
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
          {
            data.map(gig => (
            <tr key={gig._id}>
              <td>
                <img src={gig.cover} />
              </td>
              <td>{gig.title}</td>
              <td>${gig.price}</td>
              <td>{gig.sales}</td>
              <td><i onClick={() => handleDelete(gig._id)} className="fa-solid fa-trash"></i></td>
            </tr>

            ))
          }
        </table>
      </div>)}
    </div>
  )
}

export default MyGigs