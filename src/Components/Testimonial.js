import React from "react";
import {useState} from 'react';

export default function Testimonials() {
  const [message, setMessage] = useState('');
  const handleClick = event => {
    event.preventDefault();
    setMessage('True');
  
  };
  if (message == "True")
 { return (
    
    
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
        <button class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={handleClick}>Client Testimonials</button>  
        </h1>
        <ul>
           <li> Recommender Name: Vishal Krishna Singh</li>
           <li> Title: IIIT Training</li>
           <li> He has an excellent knowledge of React JS and related modules.</li>
           
           </ul>
       
      </div>
    </section>
  )}
  else {
  return (
    
    
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
        <button class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={handleClick}>Client Testimonials</button>  
        </h1>
       
      </div>
    </section>
  )
          }}