import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {  useState } from 'react';
import '../App.css';
import BuyMessage from './BuyMessage';
import { useNavigate } from 'react-router';
import DeleteProduct from './DeleteProduct';
import { deleteProduct } from '../service/api';
import { Link } from 'react-router-dom';

                                         

function Product(props) {

    const [showMessage, setShowMessage] = useState(false);
    const [like, setLike] = useState(0)
    const [deleteProd,setDeleteProd] = useState(false)
    const navigate = useNavigate()
    //const param = useParams()


    const handleClick = () => {
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
          }, 2000);
        
      };

    function handleLike () {
        setLike(like+1)
    }
    
    const handleUpdate = ()=>{
      navigate(`update-product/${props.id}`)
    }
        
    

    const deleteP = async () =>{
      const res = await deleteProduct(props.id)

      if(res.status === 200){
        setDeleteProd(true)
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
      
      
      
  }


  return (
    <div className="App">
      {deleteProd ? <DeleteProduct /> :
       <Card className={like<=5?"card" : "card2"}>
        <Card.Img variant="top" src={require(`../assets/images/${props.img}`)} />
        <Card.Body>
          <Card.Title><Link to={`detail/${props.id}`}>{props.name}</Link> </Card.Title>
          <Card.Text>
            Description: {props.description}
          </Card.Text>
          <Card.Text>
            Price: {props.price} DT
          </Card.Text>
          <Card.Text>
            Quantity : {props.quantity}
          </Card.Text>
          <Card.Text>
            Likes : {like}
          </Card.Text>
          <div className="button-container">
          <Button variant="primary" onClick={handleClick} disabled={props.quantity ===0}>Buy</Button>
          <Button variant="info" onClick={handleLike}>Like</Button>
        </div>
        <div className='button-container' style={{paddingTop:"4px"}}>
        <Button variant="success" onClick={handleUpdate}>Update</Button>
        <Button variant="danger" onClick={deleteP}>Delete</Button>
        </div>

        </Card.Body>
      </Card> }

      {
        showMessage && <BuyMessage />
      }
    </div>
  );
}

export default Product;
