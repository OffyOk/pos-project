import axios from 'axios';
import { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Stack,
  ButtonGroup,
  Button,
} from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { setAlert } from 'features/ui/uiSlice';
import { useDispatch } from 'react-redux';

const ViewProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(`/products/${id}`);
      setProduct(res.data);
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div>No product found.</div>;

  const deleteProduct = async () => {
    try {
      await axios.delete(`/products/${id}`);
      navigate('/products');
      dispatch(
        setAlert({
          message: 'Product deleted successfully.',
          type: 'success',
        })
      );
    } catch (ex) {
      dispatch(setAlert({ type: 'danger', message: ex.response.data.error }));
    }
  };

  return (
    <Container fluid>
      <Row className="my-2">
        <Col md={4}>
          <img
            src={`${process.env.REACT_APP_API}/${product.image}`}
            alt={product.name}
            className="w-100"
          />
        </Col>
        <Col md={8}>
          <Stack>
            <p className="fs-6 fw-bold">SKU:</p>
            <p className="ms-4">{product.sku}</p>
            <p className="fs-6 fw-bold">Name:</p>
            <p className="ms-4">{product.name}</p>
            <p className="fs-6 fw-bold">Status:</p>
            <p className="ms-4">
              {product.status === 1 ? 'In Stock' : 'Out of Stock'}
            </p>
            <p className="fs-6 fw-bold">Category:</p>
            <p className="ms-4">{product.category.name}</p>
            <p className="fs-6 fw-bold">Price:</p>
            <p className="ms-4">{product.price}</p>
            <p className="fs-6 fw-bold">Details:</p>
            <p className="ms-4">{product.desc}</p>
            <ButtonGroup>
              <Button onClick={() => navigate(`/products/${id}/edit`)}>
                Edit
              </Button>
              <Button onClick={deleteProduct} variant="danger">
                Delete
              </Button>
            </ButtonGroup>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default ViewProduct;
