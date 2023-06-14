import React, { useEffect } from "react";
import Header from './component/Header'
import Home from './component/Home'
import Checkout from './component/Checkout'
import Login from './component/Login'
import Payment from './component/Payment';
import Orders from './component/Orders';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51NGpO9SDZrS775GMPzpWDM1tZLLyrikiPiimJ4lgHU0WXl5NkxbeY9Y9N7OFOFyN1weY5brQsR2v94mLVJEigs8G00HkjJ5hsH"
);

function App() {

  const [{ basket, user }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      }
      else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">

        <Routes>
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
          <Route path="/login" element={[<Login />]} />
          <Route path="/orders" element={[<Header />, <Orders />]} />
          <Route path="/payment" element={[<Header />,
          <Elements stripe={promise}>
            <Payment />
          </Elements>]}
          />
          <Route path="/" element={[<Header />, <Home />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;