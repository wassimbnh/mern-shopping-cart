import React, { useEffect, useState } from 'react'
import Product from './Product'
import axios from 'axios'



const Products = () => {
    const [prod, setProd] = useState([])
    

    useEffect(()=>{
       axios.get('http://localhost:3001/products').then(
            res => {
                setProd(res.data)
            }
        )
    },[])

  
   

  return (
    <div>
      {
        prod.map(({id,name,price,description,quantity,img,like}) =>
            <Product key={id} 
                id={id}
                name={name}
                price={price}
                description={description}
                quantity={quantity}
                img={img}
                like={like}/>
        )
      }
    </div>
    
  )
}

export default Products
