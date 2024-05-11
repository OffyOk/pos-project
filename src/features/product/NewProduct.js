import { useNavigate } from 'react-router-dom';
import ProductForm from './ProductForm';
// import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAlert } from 'features/ui/uiSlice';

const NewProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const createProduct = async (product) => {
    try {
      // await axios.post('/products', product, {
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //   },
      // });
      fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        body: JSON.stringify({
          title: 'test product',
          price: 13.5,
          description: 'lorem ipsum set',
          image: 'https://i.pravatar.cc',
          category: 'electronic',
        }),
      });
      navigate('/products');
      dispatch(
        setAlert({
          type: 'success',
          message: 'The product has already created.',
        })
      );
    } catch (ex) {
      dispatch(setAlert({ type: 'danger', message: ex.response.data.error }));
    }
  };

  return (
    <>
      <h1 className="text-center fs-3">Create Product</h1>
      <ProductForm onSubmit={createProduct}></ProductForm>
    </>
  );
};

export default NewProduct;
