import { Col, Card, Badge } from 'react-bootstrap';
import QuantityControl from './QuantityControl';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  return (
    <Col className="g-3">
      <Card>
        <Link
          to={`/products/${product.id}`}
          className="text-decoration-none  text-secondary"
        >
          <Card.Img
            variant="top"
            src={`${process.env.REACT_APP_API}/${product.image}`}
          />
          <Card.Body>
            <Card.Title>
              <Badge bg="secondary" className="me-1">
                {product.category.name}
              </Badge>
              {product.name}
            </Card.Title>
            <Card.Text>Price: {product.price}</Card.Text>
          </Card.Body>
        </Link>
        <Card.Footer>
          <QuantityControl product={product}></QuantityControl>
        </Card.Footer>
      </Card>
    </Col>
  );
  // <div>ProductItem: {product.name}</div>;
};

export default ProductItem;
