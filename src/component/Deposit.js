import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { addAmount,deductAmount } from './redux/slice'


import Navigation from "./includes/Nav"

// import Wallet from "./features/wallet"


function App() {

    // const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    const [amount, inputAmount] = useState('');

    // const amountValue = Number(amount) || 0;

  return (
    <div className="App">
    <Navigation/>
      <div className="container">
      <h1>Deposit</h1>
      <hr></hr>


      
      <div className="row">
        <div className="col-lg-4">
          <div class="form-group">
          <label for="">Amount</label>
          <input type="text" class="form-control" id="" placeholder=""
          onChange={(e) => inputAmount(e.target.value)}  value={amount} 
          />
          </div>
          <button
          type="button" class="btn btn-success"
          onClick={() => dispatch(addAmount(Number(amount)))}
          >
          Add Amount
          </button>

          <button
          type="button" class="btn btn-success"
          onClick={() => dispatch(deductAmount(Number(amount)))}
          >
          Deduct Amount 
          </button>
        </div>
      </div>



      </div>
    </div>
  );
}

export default App;
