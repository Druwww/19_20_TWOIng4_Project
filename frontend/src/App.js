import React from 'react';
import './App.css';
import Admin from './Admin.js'
import Home from './Home.js'

import { Navbar, Row, Col, Nav } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar bg="dark" variant="dark" fixed="top">
          <Navbar.Brand href="/">Quentin et Pierre ^^</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/admin">Admin</Nav.Link>
          </Nav>
        </Navbar>

        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </Router>
    )
  }
}

export default App;

