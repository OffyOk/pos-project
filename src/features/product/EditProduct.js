import ProductForm from './ProductForm';
import axios from 'axios';
import { omit } from 'lodash';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { setAlert } from 'features/ui/uiSlice';

const EditProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/products/${id}`);
      const product = omit(data, ['id', 'category']);
      console.log({ ...product, categoryId: data.category.id });
      setProduct({ ...product, categoryId: data.category.id });
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <h1>Loading...</h1>;
  }

  const updateProduct = async (product) => {
    try {
      await axios.patch(`/products/${id}`, product, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate('/products');
      dispatch(
        setAlert({
          type: 'success',
          message: 'The product has already updated.',
        })
      );
    } catch (ex) {
      dispatch(setAlert({ type: 'danger', message: ex.response.data.error }));
    }
  };

  return (
    <>
      {' '}
      <h1 className="text-center my-4">Edit Product</h1>
      <ProductForm
        onSubmit={updateProduct}
        currentProduct={product}
      ></ProductForm>
    </>
  );
};

export default EditProduct;
