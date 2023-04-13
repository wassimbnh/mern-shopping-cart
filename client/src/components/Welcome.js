import Alert from 'react-bootstrap/Alert';
import { Button, NavLink } from 'react-bootstrap';
import { useNavigate } from 'react-router';

function Welcome() {
const navigate = useNavigate()

const activeLinkStyle = { color: "gray" };
const inactiveLinkStyle = { color: "black" };

const handleClick = () => {
  navigate("/add-product")
}

  return (
    <>
      {[
        'success',
        
      ].map((variant) => (
        <Alert key={variant} variant={variant} style={{ width: "100vw" }}>
          MyStore
          <NavLink to="/" 
           style={{ color: 'black' }}
           activeStyle={{ color: 'red' }}
            >Products</NavLink>
        </Alert>
      ))}
      <div style={{paddingBottom:"3px", paddingLeft:"3px" , }}>
      <Button onClick={handleClick}>Add Product</Button>
      </div>
      
    </>
  );
}

export default Welcome;