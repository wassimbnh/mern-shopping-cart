import Alert from 'react-bootstrap/Alert';

function DeleteProduct() {



 

  return (
    <>
      {[
        'danger',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          Product deleted successfully !!
        </Alert>
      ))}
    </>
  );
}

export default DeleteProduct;