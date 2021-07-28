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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
              
                    </li>
                    <li className="nav-item">
                    <Link to="/deposit" className="nav-link">Deposit</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/form" className="nav-link">Form</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/store" className="nav-link">Store</Link>
                    </li>
     
            
                </ul>

                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item mx-3">
                    <b>Wallet: {wallet}</b>
              
                    </li>

                    <li className="nav-item mx-3">
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
