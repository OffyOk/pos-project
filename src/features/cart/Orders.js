// import axios from 'axios';
import { isEmpty } from 'lodash';
import { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import OrderDetails from './OrderDetails';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      // const res = await axios.get('/orders');
      // setOrders(res.data);
      const res = await fetch('https://fakestoreapi.com/carts');
      const data = await res.json();
      // console.log(data);
      setOrders(data);
    };

    fetchOrders();
  }, []);

  if (isEmpty(orders)) return <p>No orders found</p>;

  return (
    <Row xs={1} md={2} className="g-2 my-2">
      {orders.map((order) => (
        <Col key={order.id}>
          <Card>
            <Card.Header>
              {order.name || 'N/A'}, {order.email || 'N/A'},{' '}
              {order.tel || 'N/A'}
            </Card.Header>
            <Card.Body>
              <OrderDetails
                products={order.products}
                editable={false}
              ></OrderDetails>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Orders;
