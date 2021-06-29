
import { useSelector, useDispatch } from 'react-redux'
import { addCart, removeCart } from './redux/slice'


import Navigation from "./includes/Nav"

// import Wallet from "./features/wallet"


function App() {

    // const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

  return (
    <div className="App">
    <Navigation/>
      <div className="container">
      <h1>Home</h1>
      <hr></hr>

      <div>
      <button
           type="button" class="btn btn-primary"
          onClick={() => dispatch(addCart())}
        >
          Add Cart
        </button>

        <button
           type="button" class="btn btn-primary"
          onClick={() => dispatch(removeCart())}
        >
          Add Cart
        </button>
    
      </div>
      </div>
    </div>
  );
}

export default App;
