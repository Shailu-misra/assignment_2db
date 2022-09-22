import React from "react";
import {useState} from 'react';

export default function About() {
  const [message, setMessage] = useState('');
  const handleClick = event => {
    event.preventDefault();
    setMessage('True');
  
  };
  if (message == "True")

{
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <button class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={handleClick}>About Me</button>  

          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hello! IITIAN's 
            <br className="hidden lg:inline-block" />Myself Shailendra from Lucknow.
            {/* <br className="hidden lg:inline-block" />It was a great learning expereince */}
          </h1>
          <p className="mb-8 leading-relaxed">
           I work as an Assistant Engineer in UPPCL.I have an industry expreience of 4 years.
           My short-term goal is to work for my organisation, which will allow me to enhance my skills and Knowledge. 
           My long term goal would be to reach a higher position in my company
          </p>
          <div className="flex justify-center">
          <a
              href="#contact"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
     
        </div>
      </div>
      </section>
  );
}
else 
{
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <button class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={handleClick}>About Me</button>  

         
     
        </div>
      </div>
      </section>
  );
}}
