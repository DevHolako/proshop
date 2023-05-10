import { Card } from "react-bootstrap";
const Product = ({ product }) => {
  const { _id, name, image, price } = product;

  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/product/${_id}`}>
        <Card.Img src={image} variant="top" />
      </a>
      <Card.Body>
        <a href={`/product/${_id}`}>
          <Card.Title as="h6">
            <strong>{name}</strong>
          </Card.Title>
        </a>
        <Card.Text as="h4">${price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
