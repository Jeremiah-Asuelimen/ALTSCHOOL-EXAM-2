import React from 'react';
import '../styles/NotFound.css';  
  
 const NotFound = () => { 
   return ( 
     <div className="Not-Found"> 
       <h1>404 - Page Not Found</h1>  
       <p>The requested page could not be found</p> 
       <a href="/" className="home"> 
         Go To Home 
       </a> 
     </div> 
   ); 
 }; 
  
 export default NotFound;
