import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import styled from 'styled-components';

import Login from './components/Login';
import Logout from './components/Logout';
import Home from './components/Home';
import FriendsList from './components/FriendsList';

import PrivateRoute from './components/PrivateRoute';

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 5vh;
  background-color: lightcoral;

  .navLinks{
    display: flex;
    flex-direction: row;
    width: 20%;
    justify-content: space-between;
  }

  & a{
    color: black;
    text-decoration: none;
    font-size: 1.25rem;
    font-weight: bolder;

    &:hover{
      color: whitesmoke;
    }
  }
`

function App() {
  const [ loggedIn, setLoggedIn] = useState(false); /* todo: make this function so that the links below can show or hide based on the loggedIn boolean so that refreshing is not required to toggle the links */

  return (
    <div className="App">
      <Router>
        <Nav>
          <Link to='/'>App</Link>
          <div className='navLinks'>
            <Link to='/'>Home</Link>
            { !localStorage.getItem('token') && <Link to='/login'>Login</Link> }
            { localStorage.getItem('token') && <Link to='/logout'>Logout</Link> }
            { localStorage.getItem('token') && <Link to='/friends'>Friends</Link> }
          </div>
        </Nav>
        <Switch>
          <PrivateRoute exact path='/friends' component={FriendsList}/>
          <PrivateRoute path='/logout' component={Logout}/>
          <Route path='/login' component={Login}/>
          <Route path='/' component={Home}/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
