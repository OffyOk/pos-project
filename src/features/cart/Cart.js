import { Accordion, ButtonGroup, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { isEmpty } from 'lodash';
import { clear } from './cartSlice';
import OrderDetails from './OrderDetails';
import CustomerInfo from './CustomerInfo';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.cart.products);
  const CustomerInfor = useSelector((state) => state.cart.customerInfo);
  const productItems = Object.values(products);

  const save = async () => {
    const payload = { ...CustomerInfor, products: productItems };
    await axios.post('/orders', payload);
    dispatch(clear());
    navigate('/products');
  };

  if (isEmpty(products)) return <p>Empty Cart</p>;

  return (
    <>
      <h1 className="text-center my-4">Order Summary</h1>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Order Details</Accordion.Header>
          <Accordion.Body>
            <OrderDetails products={productItems}></OrderDetails>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Customer Information</Accordion.Header>
          <Accordion.Body>
            <CustomerInfo></CustomerInfo>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <br />
      <ButtonGroup>
        <Button onClick={() => save()}>Save</Button>
        <Button onClick={() => dispatch(clear())} variant="danger">
          Clear
        </Button>
      </ButtonGroup>
    </>
  );
};

export default Cart;
