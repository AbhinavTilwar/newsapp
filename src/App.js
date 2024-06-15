import React, { Component } from 'react'
import Navbar from "./Components/Navbar";
import News from './Components/News';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
export default class App extends Component {
  apiKey=process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar/>        
         <div className="container">
          <Routes>  
              <Route exact path="/" element={<News key={"general"} api={this.apiKey} pageSize={25} country={"in"} category={"general"}/>} />
          </Routes>
          <Routes>
              <Route exact path="/business" element={<News key={'business'} api={this.apiKey} pageSize={25} country={"in"} category={"business"}/>} />
          </Routes>
          <Routes>
               <Route exact path="/sports" element={<News key={'sports'} api={this.apiKey} pageSize={25} country={"in"} category={"sports"}/>}/>
          </Routes>
          <Routes>
              <Route exact path="/science" element={<News key={'science'} api={this.apiKey} pageSize={25} country={"in"} category={"science"}/>} />          
          </Routes>
         </div>
    </BrowserRouter>
      </div>
    )
  }
}
