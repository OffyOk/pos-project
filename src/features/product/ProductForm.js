// import axios from 'axios';
import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const ProductForm = ({ currentProduct, onSubmit }) => {
  const [categories, setCategories] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    defaultValues: currentProduct,
  });

  // console.log('defaultValues:', currentProduct);

  const submit = (formValue) => {
    // let priceValue = parseFloat(formValue.price);
    // let statusValue = parseInt(formValue.status);
    // let categoryValue = parseInt(formValue.categoryId);
    onSubmit({
      ...formValue,
      // price: priceValue,
      // status: statusValue,
      // categoryId: categoryValue,
      image: formValue.image[0],
    });
    // console.log(typeof formValue.status);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      // const res = await axios.get('/categories');
      // setCategories(res.data);
      const res = await fetch(
        `${process.env.REACT_APP_API}/products/categories`
      );
      const data = await res.json();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  // console.log(errors);
  return (
    <Form className="mb-3" onSubmit={handleSubmit(submit)}>
      {/* <Form.Group className="mb-3">
        <Form.Label>SKU</Form.Label>
        <Form.Control
          placeholder="Enter SKU"
          isInvalid={!!errors.sku}
          {...register('sku', { required: 'SKU is a required field.' })}
        ></Form.Control>
        <Form.Control.Feedback type="invalid">
          {errors.sku?.message}
        </Form.Control.Feedback>
      </Form.Group> */}
      {/* <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          placeholder="Enter name"
          isInvalid={!!errors.name}
          {...register('name', { required: 'name is a required field.' })}
        ></Form.Control>
        <Form.Control.Feedback type="invalid">
          {errors.name?.message}
        </Form.Control.Feedback>
      </Form.Group> */}
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          placeholder="Enter name"
          isInvalid={!!errors.title}
          {...register('title', { required: 'name is a required field.' })}
        ></Form.Control>
        <Form.Control.Feedback type="invalid">
          {errors.title?.message}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control
          placeholder="Enter price"
          isInvalid={!!errors.price}
          {...register('price', {
            required: 'price is a required field.',
            validate: (v) =>
              parseInt(v) !== 0 || 'Price must be greater than 0.',
          })}
        ></Form.Control>
        <Form.Control.Feedback type="invalid">
          {errors.price?.message}
        </Form.Control.Feedback>
      </Form.Group>
      {/* <Form.Group className="mb-3">
        <Form.Label>Status</Form.Label>
        <Form.Select
          isInvalid={!!errors.status}
          {...register('status', {
            validate: (v) =>
              v !== 'Select Status' || 'Status is required field.',
          })}
        >
          <option value={null}>Select Status</option>
          <option value={1}>In Stock</option>
          <option value={2}>Out of Stock</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {errors.status?.message}
        </Form.Control.Feedback>
      </Form.Group> */}
      {/* <Form.Group className="mb-3">
        <Form.Label>Category</Form.Label>
        <Form.Select
          value={currentProduct ? currentProduct.categoryId : null}
          {...register('categoryId', {
            validate: (v) =>
              v !== 'Select Category' || 'Category is required field.',
          })}
        >
          <option value={null}>Select Category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {errors.categoryId?.message}
        </Form.Control.Feedback>
      </Form.Group> */}
      <Form.Group className="mb-3">
        <Form.Label>Category</Form.Label>
        <Form.Select
          value={currentProduct ? currentProduct.category : null}
          {...register('category', {
            validate: (v) =>
              v !== 'Select Category' || 'Category is required field.',
          })}
        >
          <option value={null}>Select Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {errors.category?.message}
        </Form.Control.Feedback>
      </Form.Group>
      {/* <Form.Group className="mb-3">
        <Form.Label>Details</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter product details"
          isInvalid={!!errors.desc}
          {...register('desc', { required: 'desc is a required field.' })}
        ></Form.Control>
        <Form.Control.Feedback type="invalid">
          {errors.desc?.message}
        </Form.Control.Feedback>
      </Form.Group> */}
      <Form.Group className="mb-3">
        <Form.Label>Details</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter product details"
          isInvalid={!!errors.description}
          {...register('description', {
            required: 'description is a required field.',
          })}
        ></Form.Control>
        <Form.Control.Feedback type="invalid">
          {errors.description?.message}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Image</Form.Label>
        <Form.Control
          type="file"
          placeholder="Enter image"
          isInvalid={!!errors.image}
          {...register(
            'image',
            currentProduct ? {} : { required: 'Image is a required field.' }
          )}
        ></Form.Control>
        <Form.Control.Feedback type="invalid">
          {errors.image?.message}
        </Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-3">
        {currentProduct ? 'Update' : 'Create'}
      </Button>
    </Form>
  );
};

export default ProductForm;
