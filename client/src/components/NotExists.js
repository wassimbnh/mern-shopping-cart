import Alert from 'react-bootstrap/Alert';

function NotExists() {
  return (
    <>
      {[
        
        'danger',
   
      ].map((variant) => (
        <Alert key={variant} variant={variant} style={{ width: "100vw" }}>
          This product does not exists
        </Alert>
      ))}
    </>
  );
}

export default NotExists;