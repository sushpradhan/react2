import React, { useState } from 'react';
import './App.css';
import Header from "./Components/header/Header";
import Footer from './Components/footer/Footer';

import Dashboard from './Components/dashboard/Dashboard';

import Login from "./Components/login/Login";


import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';



function App() {
  const [token, setToken] = useState();

  // To get a Token
  const updateToken = (token: string) => {
    localStorage.setItem('token', token)
    setToken(token);
  }


  return (
    <div className="App">
      <Header></Header>
      <Router>
        {/* <Login></Login>
        <DashBoard></DashBoard> */}
         {/*
         
          <Route exact path = '/' component = {Login} />
          <Route exact path = '/dashboard' component = {Dashboard} />
          <Dashboard></Dashboard> */}
         <Route exact path="/" component={() => (token) ? <Redirect to='/Dashboard'></Redirect> : <Login updateToken={updateToken}></Login>}></Route>
        <Route exact path='/Dashboard' component={() => (token) ? <Dashboard /> : <Redirect to='/' />}></Route>

       
      </Router >

      <Footer></Footer>

    </div >
  );

}

export default App;

       