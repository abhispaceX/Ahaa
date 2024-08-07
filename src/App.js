import React, { Suspense, lazy, useEffect, useState } from "react";
import Body from "./components/Body/Boody.js";
import NavBar from "./components/navBar/navbar";
import {QueryClient,QueryClientProvider} from "@tanstack/react-query"
import About from "./components/About.js";
import { Route, Routes, BrowserRouter, useLocation } from 'react-router-dom';

import CartPage from "./components/cart/Cart.js";
import RestuarantMenu from "./components/menu.js";
import Signup from "./components/Signup.js";
import Login from './components/Login.js';
import FruitInput from "./components/fruit.js"
import {Provider} from "react-redux"
import  Store from "./utils/store.js"
import ContactUs from "./components/contact.js";
const Grocery = lazy(() => import("./components/Grocery"));
 const queryCleint= new QueryClient();
function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

function App() {
  const location = useLocation();
  const [showNavBar, setShowNavBar] = useState(true);

  useEffect(() => {
    // Hide NavBar on specific routes
    setShowNavBar(location.pathname !== '/login' && location.pathname !== '/signup');
  }, [location]);

  return (
    <> 
    <QueryClientProvider client={queryCleint}>
    <Provider store={Store} >
      {showNavBar && <NavBar />}
      <Routes>
        <Route path="/" element={<Body />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/fruit" element={<FruitInput/>}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/restuarent/:resid" element={<RestuarantMenu />}></Route>
        <Route path="/grocery" element={<Suspense fallback={<h1>loading..</h1>}><Grocery /></Suspense>}></Route>
      </Routes>
      </Provider>
      </QueryClientProvider>
    </>
  );
}

export default AppWrapper;
