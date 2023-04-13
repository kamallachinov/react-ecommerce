import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import Product from './pages/Product';
import Cart from './pages/Cart';

import { Provider } from 'react-redux';
import { store, persistor } from './redux/store'
import Success from './pages/Success';

import { PersistGate } from 'redux-persist/integration/react'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
    ]
  },
  {
    path: "/products/:category",
    element: <ProductList />
  },
  {
    path: "/product/:id",
    element: <Product />
  },
  {
    path: "/cart",
    element: <Cart />
  },
  {
    path: "/success",
    element: <Success />
  },
  {
    path: "/register",
    element: <Register />
  },

  {
    path: "/login",
    element: <Login />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
);

