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
          <div
            className="w-50 m-auto d-flex align-items-center"
            style={{ height: '250px' }}
          >
            <Card.Img
              variant="top"
              src={`${product.image}`}
              style={{ height: '75%', objectFit: 'contain' }}
            />
          </div>
          <Card.Body>
            <Card.Title style={{ maxHeight: '52px', overflow: 'hidden' }}>
              <Badge bg="secondary" className="me-1">
                {product.category}
              </Badge>
              <br />
              {product.title}
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
