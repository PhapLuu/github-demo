import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar'
import Gigs from './pages/gigs/Gigs'
import Gig from './pages/gig/Gig'
import Home from './pages/home/Home'
import Message from './pages/message/Message'
import Messages from './pages/messages/Messages'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import MyGigs from './pages/myGigs/MyGigs'
import Orders from './pages/orders/Orders'
import Add from './pages/add/Add'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import './app.scss'
function App() {
  const Layout = () =>{
    return (
      <div className='app'>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout/>,
      children:[
        {
          path:'/',
          element: <Home/>
        },
        {
          path:'/gigs',
          element: <Gigs/>
        },
        {
          path:'/gig/:id',
          element: <Gig/>
        },
        {
          path:'/orders',
          element: <Orders/>
        },
        {
          path:'/myGigs',
          element: <MyGigs/>
        },
        {
          path:'/register',
          element: <Register/>
        },
        {
          path:'/login',
          element: <Login/>
        },
        {
          path:'/add',
          element: <Add/>
        },
        {
          path:'/messages',
          element: <Messages/>
        },
        {
          path:'/message/:id',
          element: <Message/>
        },
      ]
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
