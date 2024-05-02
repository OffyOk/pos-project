import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setCustomerInfo } from './cartSlice';

const CustomerInfo = () => {
  const dispatch = useDispatch();
  const useCustomerInfor = useSelector((state) => state.cart.customerInfo);
  const setField = (field, e) =>
    dispatch(setCustomerInfo({ field, value: e.target.value }));

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          value={useCustomerInfor?.name ?? ''}
          onChange={(e) => setField('name', e)}
          placeholder="Enter name"
        ></Form.Control>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          value={useCustomerInfor?.email ?? ''}
          onChange={(e) => setField('email', e)}
          placeholder="Enter email"
        ></Form.Control>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Tel</Form.Label>
        <Form.Control
          value={useCustomerInfor?.tel ?? ''}
          onChange={(e) => setField('tel', e)}
          placeholder="Enter tel"
        ></Form.Control>
      </Form.Group>
    </Form>
  );
};

export default CustomerInfo;
