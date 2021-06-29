
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './../redux/slice'

function App() {

    const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
    <div>
      
    <div>{count}</div>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  </div>
  );
}

export default App;
