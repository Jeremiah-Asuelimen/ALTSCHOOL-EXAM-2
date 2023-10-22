import React, { useState } from 'react'; 
import '../styles/ErrorTest.css';
  
 const Test = () => { 
   const [error, setError] = useState(false); 
   if (error) { 
     throw Error('Something went wrong'); 
   } 
  
   const handleError = () => { 
     setError(true); 
   }; 
  
   return ( 
     <div className="Error-Test"> 
       <div> 
         <h2>Click to test for ErrorBoundary</h2> 
         <button onClick={handleError}>Test</button> 
       </div> 
     </div> 
   ); 
 }; 
  
 export default Test;
