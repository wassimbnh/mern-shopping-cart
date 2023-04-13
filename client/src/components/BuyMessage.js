import Alert from 'react-bootstrap/Alert';

function BuyMessage() {
  return (
    <>
      {[
        'primary',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          You Bought an item
        </Alert>
      ))}
    </>
  );
}

export default BuyMessage;