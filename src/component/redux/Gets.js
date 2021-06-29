
import {Link} from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux'


import { getPosts } from './../redux/getSlice'

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getPosts())
    }, [dispatch])
  

  return (
    <div className="App">
     hello
    </div>
  );
}

export default App;
