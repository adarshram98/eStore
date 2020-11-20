import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import {useStateValue} from './StateProvider'
import { useEffect } from "react";
import { auth } from "./firebase";
function App() {

  const [{user},dispatch] = useStateValue()

  useEffect(()=>{
    const unsubscribe =auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        //user logged in
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }
      else{
        //user not logged in
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })

    return() =>{
      //cleanup ops
      unsubscribe();
    }
  },[]
  );
  console.log(user)
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/checkout">
            <Navbar></Navbar>
            <Checkout></Checkout>
          </Route>
          <Route path="/">
            <Navbar></Navbar>
            <Home></Home>
            
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
