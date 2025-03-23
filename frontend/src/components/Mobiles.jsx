import React from 'react'
import {mobiles} from '../data/mobiles';
import { Link } from 'react-router-dom';
const Mobiles = () => {
  return (
    <div className='div1'>
      {
        mobiles.map((item)=>{
            return(
                <div className='div2'>
                  <Link to={`./mobiles/${item.id}`}> <img src={item.image} className='img1'></img></Link> 
                   <div className='div3'>{item.Name}</div> 
                </div>
            )
        })
      }
    </div>
  )
}

export default Mobiles
