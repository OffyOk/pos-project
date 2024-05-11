import { Stack, Form, Button, Row } from 'react-bootstrap';
import {} from 'react-hook-form';
import { useState, useEffect } from 'react';
// import axios from 'axios';
import { isEmpty } from 'lodash';
import ProductItem from './ProductItem';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');

  const fetchProducts = async () => {
    // fake api ไม่มีเส้น api สำหรับ search มาให้แต่คิดว่าด้วย [{product},...] ที่ส่งเข้ามานี้น่าจะเอา query นี้ไปเทียบกับ ชื่อ product แล้วแสดงออกมาได้ แต่ก็ดูวุ่นว่าย อาจจะจำแค่ ปุ่ม sort by asc,desc และ limit ขึ้นมาพอ
    // const queryString = query ? `?search=${query}` : '';
    const queryString = query ? `?sort=${query}` : '';
    // const res = await axios.get(`/products${queryString}`);
    // setProducts(res.data);

    const res = await fetch(
      `${process.env.REACT_APP_API}/products${queryString}`
    );
    const data = await res.json();
    setProducts(data);

    // .then promise เป็นแบบ callback เก่าแล้ว
    // .then((res) => res.json())
    // .then((json) => setProducts(json));
    // หาอ่านเพิ่มได้ที่ลิงค์ล่างนี้
    // https://medium.com/thinc-org/callback-promise-async-await-%E0%B8%A7%E0%B8%B2%E0%B8%A2%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%A2-%E0%B9%81%E0%B8%AB%E0%B9%88%E0%B8%87-javascript-f5a842e59d9e

    console.log(products);
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(products);

  return (
    <>
      <h1 className="fs-3 text-center">All Products</h1>
      <Stack direction="horizontal" gap={3}>
        <Form.Control
          placeholder="Enter product name or SKU."
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="vr"></div>
        <Button onClick={() => fetchProducts()}>Search</Button>
      </Stack>
      {isEmpty(products) ? (
        <div className="py-2">No products found</div>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-2 py-2">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </Row>
      )}
    </>
  );
};

export default Products;
