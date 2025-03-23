import React from 'react'
import { useParams } from 'react-router-dom'
import { mobiles } from '../data/mobiles'

const SingleBar = () => {
    const {id} =useParams()
    const product=mobiles.find((item)=>item.id === id)
  return (
    <div className='single'>
      <img src={product.image} className='img2' id="id"></img>
      <div>
        <div className='single1'>
       <span> Product type:</span>{`         ${product.product}`}<br></br>
       <span> Product Name:</span>{`   ${product.Name}`}<br></br>
        {product.description}<br></br>
       <span> Cost:</span>{`    ${product.price}`}</div>
       <button>Buy</button>
      </div>
    </div>
  )
}

export default SingleBar
