import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
const navigate=useNavigate();
const NavBar = ({user,onLogout}) => {
  return (
    <div>
      <ul>
        <li className='tit'>ICE-STONE</li>
        <li><Link to="/">Home</Link></li>
       <li><Link to="/signup"> SignUp</Link></li>
       <li><Link to='/signin'>LogIn</Link></li>
        <li>Contact Us</li>
        <li>Orders</li>
         <li onClick={onLogout}>Logout</li>
        <li>{user}</li>
      </ul>
    </div>
  )
}

export default NavBar
