import React, { useState } from 'react'
import { Button,Form, Container } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router'
import { editProduct, getallProducts } from '../service/api'
import { useEffect } from 'react'

const UpdateProduct = () => {
    const param = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState({
        id: param.id,
        name: "",
        price: 0,
        img: "",
        like: 0,
        quantity: 0,
        description: ""
    });

    const {name , price  , quantity ,description} = product ;

    useEffect(() => {
        getProduct();
      },[]); // eslint-disable-next-line

    const getProduct = async () => {
        const response = await getallProducts(param.id);
        setProduct(response.data);
      };

    const onValueChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
      };

      const onFileHandle = (e) => {
        console.log(e.target.files);
        setProduct({ ...product, [e.target.name]: e.target.files[0].name });
      };


    const updateProd = async () =>{
        const res = await editProduct(param.id,product)
        if(res.status===200)
         navigate("/")
    }
  return (




    
    <div>
      <Container style={{ marginTop: "30px" }}>
        <Form>
            <h2>Update Product</h2>
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control 
        onChange={(e)=> onValueChange(e)}
         as="textarea" 
        type="text" name="name"
         value={name} 
         placeholder="Enter the name" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" name="description" onChange={(e)=> onValueChange(e)} value={description} placeholder="Enter the product description" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Price</Form.Label>
        <Form.Control   type="number" name="price" onChange={(e)=> onValueChange(e)} value={price} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Quantity</Form.Label>
        <Form.Control   type="number" name="quantity" onChange={(e)=> onValueChange(e)} value={quantity}  />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Image</Form.Label>
        <Form.Control   type="file" onChange={(e) => onFileHandle(e)} name="img" />
      </Form.Group>
      <Button variant="primary"  onClick={()=>updateProd()}>
        Update Product
      </Button>
      <Button onClick={()=>navigate("/")}variant="gray" type="reset">
        Cancel
      </Button>
    </Form>
    </Container>
    </div>
  )
}

export default UpdateProduct
