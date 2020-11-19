import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <h2>Login ROute</h2>
          </Route>
          <Route path="/checkout">
            <Navbar></Navbar>
            <h2>Checkout ROute</h2>
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
