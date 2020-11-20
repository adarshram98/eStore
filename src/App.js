import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
function App() {
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
