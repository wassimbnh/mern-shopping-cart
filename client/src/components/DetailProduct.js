
import { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import { useParams } from 'react-router';
import Product from './Product';
import NotExists from './NotExists';

function DetailProduct() {

 
    const [oneProduct, setOneProduct] = useState({})
             
 
    const { id }= useParams();

        useEffect(()=>{
            axios.get(`http://localhost:3001/products/${id}`)
            .then(res=> {     
                console.log(id)
                console.log(res)
                setOneProduct(res.data)
            })
            .catch(err =>{
                console.log(err)
            })
        },[id])
       
    

  return (
    <div className="App">
      
      {oneProduct?
  Object.keys(oneProduct).length !== 0 && (
    <Product
      key={oneProduct.id}
      name={oneProduct.name}
      price={oneProduct.price}
      quantity={oneProduct.quantity}
      description={oneProduct.description}
      img={oneProduct.img}
      like={oneProduct.like}
    />
  )
 : <NotExists />}


      
     


    </div>
  );
}

export default DetailProduct;
