import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Navbar></Navbar>
            <h2>Login ROute</h2>
          </Route>
          <Route path="/checkout">
            <Navbar></Navbar>
            <h2>Checkout ROute</h2>
          </Route>
          <Route path="/">
            <Navbar></Navbar>
            <h2>Home Page</h2>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
