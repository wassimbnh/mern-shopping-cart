import React from 'react'

const OneProduct = (props) => {
  return (
    <div>
      <div className="App">
      <Card className={like<=5?"card" : "card2"}>
        <Card.Img variant="top" src={require(`../assets/images/${oneProduct.img}`)} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            Description: {props.description}
          </Card.Text>
          <Card.Text>
            Price: {props.price} DT
          </Card.Text>
          <Card.Text>
            Likes : {like}
          </Card.Text>
          <div className="button-container">
          <Button variant="primary" onClick={handleClick}>Buy</Button>
          <Button variant="info" onClick={handleLike}>Like</Button>
        </div>
        </Card.Body>
      </Card>

      {
        showMessage && <BuyMessage />
      }
    </div>
    </div>
  )
}

export default OneProduct
