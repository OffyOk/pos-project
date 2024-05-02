import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: {},
  customerInfo: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // dispatch(addToCart(product))
    addToCart({ products }, action) {
      const product = action.payload;
      const { sku } = product;
      // check if product is in cart
      if (sku in products) {
        products[sku].quantity++;
      } else {
        products[sku] = {
          sku: product.sku,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1,
        };
      }
    },
    // dispatch(removeFromCart(product))
    removeFromCart({ products }, action) {
      const product = action.payload;
      const { sku } = product;
      const quantity = products[sku]?.quantity;
      // check if product is in cart
      if (quantity > 1) products[sku].quantity--;
      else delete products[sku];
    },
    // dispatch(clear())
    clear() {
      return initialState;
    },
    setCustomerInfo(state, action) {
      //dispatch(setCustomerInfo({field:'name', value: 'somchai'}))
      const { field, value } = action.payload;
      if (!state.customerInfo) state.customerInfo = {};
      state.customerInfo[field] = value;
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, clear, setCustomerInfo } =
  cartSlice.actions;
