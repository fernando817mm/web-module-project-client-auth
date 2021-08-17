import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import Login from './components/Login';
import Logout from './components/Logout';
import Home from './components/Home';
import FriendsList from './components/FriendsList';

import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to='/'>Home</Link>
        { !localStorage.getItem('token') && <Link to='/login'>Login</Link> }
        { localStorage.getItem('token') && <Link to='/logout'>Logout</Link> }
        { localStorage.getItem('token') && <Link to='/friends'>Friends</Link> }
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
