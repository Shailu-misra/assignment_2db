import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          <ul>
           <li> Login and Sign UP</li>
           <li> Workforce Management System</li>
           <li> Organisation Hierarchy</li>
           <li> To Do list etc..</li>
           </ul>
          </p>
        </div>
       
      </div>
    </section>
  );
}