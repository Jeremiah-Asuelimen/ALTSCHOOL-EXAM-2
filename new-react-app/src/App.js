// import logo from './logo.svg';
import React from 'react';
import Count from './components/useCounters';
import { Routes, Route, NavLink, Link} from 'react-router-dom';
import NotFound from './components/NotFound'
import Test from './components/ErrorTest'
import './App.css'


function App() {

  return( 
      <main className="App"> 
        <div> 
          <nav> 
            {/* <img src={Logo} />  */} 
             <NavLink to="/"  > 
             My Diary
            </NavLink> 
            <NavLink to= "/useCount" >
              Count 
            </NavLink>
            <NavLink to="/ErrorBoundary" > 
              Error boundary 
            </NavLink> 
            <NavLink to="/NotFound" > 
              Home
            </NavLink> 
          </nav> 
        </div> 
   
        <div> 
          <Routes> 
            <Route path='/'>welcome To paradise</Route>
            <Route path="/usecount" element={<Count />} /> 
            <Route path="/ErrorBoundary" element={<Test />} /> 
            <Route path="NotFound" element={<NotFound />} /> 
          </Routes> 
        </div> 
      </main> 
    ); 
  }
 

export default App;

  