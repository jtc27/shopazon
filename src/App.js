
import './App.css';
import Checkout from './Checkout';

import Header from './Header';
import Home from './Home';
import Login from './Login';
import Register from './Register'
import FinalCheckout from './FinalCheckout';

import { useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './firebase'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useStateValue } from './StateProvider';

function App() {

  const [{user}, dispatch] = useStateValue()

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        console.log('The User is >>>', authUser)
      
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    });
  }, [])

  

  return (
    //BEM convention
    <div className="app">
    <Router>
  
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<><Header /><Checkout /></>} />
        <Route path="/finalcheckout" element={<><FinalCheckout /></>} />
        <Route path="/" element={<><Header /><Home /></>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
