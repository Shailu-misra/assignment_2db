import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Testimonials from "./Components/Testimonial";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginUppcl from './Components/LoginUppcl';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<LoginUppcl />} />
      <Route path='/*' element={<main className="text-gray-400 bg-gray-900 body-font">
    <Navbar />
    <About />
    <Projects />
    <Skills />
    <Testimonials />
    <Contact />
  </main>} />
    </Routes>
  </BrowserRouter>
    
  );
}

export default App;
// function Goal(props) {
//   const isGoal = props.isGoal;
//   if (isGoal) {
//     return <MadeGoal/>;
//   }
//   return <MissedGoal/>;
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Goal isGoal={false}  />);