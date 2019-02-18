import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/community">Community</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/shop" component={Shop} />
      <Route path="/community" component={Community} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h1>This is home!</h1>
  </div>
)

const About = () => (
  <div>
    <h1>This is the about!</h1>
  </div>
)

const Shop = () => (
  <div>
    <h1>This is the shop!</h1>
  </div>
)

const Community = () => (
  <div>
    <h1>This is the community!</h1>
  </div>
)

const Contact = () => (
  <div>
    <h1>This is the contact!</h1>
  </div>
)

export default App;