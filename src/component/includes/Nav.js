import React, { useEffect } from 'react'

import {Link} from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './../redux/slice'

import { getPosts } from './../redux/getSlice'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])


    const [wallet, cart] = useSelector(state => [state.counter.wallet,state.counter.cart])

    const list = useSelector(state => state.posts.result)

    console.log("hello")
    console.log(list)


  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <Link to="/" class="nav-link">Home</Link>
              
                    </li>
                    <li class="nav-item">
                    <Link to="/deposit" class="nav-link">Deposit</Link>
                    </li>
                    <li class="nav-item">
                    <Link to="/form" class="nav-link">Form</Link>
                    </li>
     
            
                </ul>

                <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li class="nav-item mx-3">
                    <b>Wallet: {wallet}</b>
              
                    </li>

                    <li class="nav-item mx-3">
                    <b>Cart: {cart}</b>
              
                    </li>
   
            
                </ul>

                </div>
            </div>
        </nav>
    </div>
  );
}

export default App;
