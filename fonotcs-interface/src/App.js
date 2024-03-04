import './App.css';
import Login  from './Login';
import Register  from './Register';
import {Case1}  from './Case1';
import {Case2}  from './Case2';
import {CaseManager} from './CaseManager';
import {Home}  from './Home';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import axios from 'axios';
import LogoHeader from './imgs/logo-header.png';
import React, { Component } from 'react';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalScore: 0,
      caseCount: 0
    };
  }

  handleResponseChange = (value) => {
    const floatValue = parseFloat(value);
  
    this.setState(prevState => ({ 
      totalScore: prevState.totalScore + floatValue,
      caseCount: prevState.caseCount + 1
    }));
  };

  render() {
    return (
      <BrowserRouter>
        <img className='logo-header-img' src={LogoHeader} alt="FonoTCS logo and name" />
        <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path='/case1' element={<Case1 handleResponseChange={this.handleResponseChange}/>} exact/>
          <Route path='/case2' element={<Case2 handleResponseChange={this.handleResponseChange}/>} exact/>
          <Route path='/casemanager' element={<CaseManager totalScore={this.state.totalScore} caseCount={this.state.caseCount}/>} exact/>          
          <Route path='/login' element={<Login/>} exact/>
          <Route path='/register' element={<Register/>} exact/>
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App;
