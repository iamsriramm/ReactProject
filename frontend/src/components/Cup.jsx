import React from 'react'
import {cups} from '../data/cups';
import { Link } from 'react-router-dom';
const Cup = () => {
  return (
    <div className='div1'>
      {
        cups.map((item)=>{
            return(
                <div className='div2'>
                   <Link to={`./cups/${item.id}`}> <img src={item.image} className='img1'></img></Link>
                   <div className='div3'>{item.Name}</div> 
                </div>
            )
        })
      }
    </div>
  )
}

export default Cup
