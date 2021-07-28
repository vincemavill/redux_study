import React, { useState } from 'react'

import { createStore } from '@reduxjs/toolkit'

import { useSelector, useDispatch } from 'react-redux'
import { addAmount,deductAmount } from './redux/slice'


import Navigation from "./includes/Nav"

// import Wallet from "./features/wallet"


function App() {





  return (
    <div className="App">
    <Navigation/>
      <div className="container">
      <h1>Store Redux</h1>
      <hr></hr>


      
      <div className="row">
        <div className="col-lg-12">
          <h1>https://redux-toolkit.js.org/api/createslice</h1>
        </div>
      </div>



      </div>
    </div>
  );
}

export default App;
