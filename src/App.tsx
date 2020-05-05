import React, { useState } from 'react';
import './App.css';
import Header from './Components/header/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Components/login/Login';
import Register from './Components/register/Register';
import Dashboard from './Components/dashboard/Dashboard';
// import About from './Components/about/About'
import ReadNow from './Components/readNow/ReadNow';
// Add the components here
function App() {
  const [token, setToken] = useState();
  // To get a Token
  const updateToken = (token: string) => {
    localStorage.setItem('token', token)
    setToken(token);
  }
  return (
    <Router>
      <div>
        <Header />
        {/* <Switch> */}
          <Route exact path="/" component={() => (token) ? <Dashboard /> : <Login updateToken={updateToken}></Login>} />
          <Route exact path="/ReadNow" component={() => (token) ? <ReadNow /> : <Login updateToken={updateToken}></Login>} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/Login" component={Login} />
          {/* <Route exact path="/About" component={About} /> */}
        {/* </Switch> */}
      </div>
    </Router>
  );
}
export default App;