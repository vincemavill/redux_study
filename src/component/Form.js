import React, { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { addAmount,deductAmount } from './redux/slice'


import Navigation from "./includes/Nav"

// import Wallet from "./features/wallet"


function App() {

    // const count = useSelector(state => state.counter.value)


    const [name, inputName] = useState('');
    const [email, inputEmail] = useState('');
    const [contact, inputContact] = useState('09');

    const [username, inputUsername] = useState('');
    const [password, inputPassword] = useState('');

    useEffect(() => {
        console.log('component mounted')
        

      }) // notice the empty array

    const dispatch = useDispatch()




    const onClickHandler = () => {
        // setCount(count + 1);

        let data = {
            "name" : name,
            "email" : email,
            "contact" : contact
        } 

        console.log(data)
      }


      const handleSubmitForm= (e) => {

        let data = {
            "username" : username,
            "password" : password,
        } 

        console.log(data)

          alert()
        e.preventDefault();

      }
      


  return (
    <div className="App">
    <Navigation/>
      <div className="container">
      <h1>Deposit</h1>
      <hr></hr>


      
      <div className="row">
        <div className="col-lg-4">
          <div class="form-group">
          <label for="">Name</label>
          <input type="text" class="form-control" id="" placeholder=""
          onChange={(e) => inputName(e.target.value)}  value={name} 
          />
          </div>

          <div class="form-group">
          <label for="">Email</label>
          <input type="text" class="form-control" id="" placeholder=""
          onChange={(e) => inputEmail(e.target.value)}  value={email} 
          />
          </div>

          <div class="form-group">
          <label for="">Contact number</label>
          <input type="text" class="form-control" id="" placeholder=""
          onChange={(e) => inputContact(e.target.value)}  value={contact} 
          />
          </div>

            <br></br>

          <button
          type="button" class="btn btn-success"
          onClick={onClickHandler}
          >
          Add Amount
          </button>


        </div>
      </div>


      <hr></hr>


      <div className="row">
        <div className="col-lg-4">
          <form onSubmit={e => {handleSubmitForm(e)}}>
          <div class="form-group">
          <label for="">Username</label>
          <input type="text" class="form-control" id="" placeholder=""
          onChange={(e) => inputUsername(e.target.value)}  value={username} required
          />
          </div>

          <div class="form-group">
          <label for="">Password</label>
          <input type="password" class="form-control" id="" placeholder=""
          onChange={(e) => inputPassword(e.target.value)}  value={password} required
          />
          </div>

 

            <br></br>

          <button
          type="submit" class="btn btn-success"
          
          >
          Login
          </button>
          </form>


        </div>
      </div>



      </div>
    </div>
  );
}

export default App;
