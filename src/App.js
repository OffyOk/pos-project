import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './features/ui/Layout';
import Cart from './features/cart/Cart';
import Orders from './features/cart/Orders';
import Products from './features/product/Products';
import NewProduct from './features/product/NewProduct';
import ViewProduct from './features/product/ViewProduct';
import EditProduct from './features/product/EditProduct';
import axios from 'axios';
import { Provider } from 'react-redux';
import { store } from './app/store';

axios.defaults.baseURL = process.env.REACT_APP_API;

// axios.defaults.headers.common['Authorization'] =
//   'Bearer ' + localStorage.getItem('token');

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="products" element={<Products />}></Route>
            <Route path="products/new" element={<NewProduct />}></Route>
            <Route path="products/:id" element={<ViewProduct />}></Route>
            <Route path="products/:id/edit" element={<EditProduct />}></Route>
            <Route path="cart" element={<Cart />}></Route>
            <Route path="orders" element={<Orders />}></Route>
            <Route index element={<Navigate to="/products" />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
