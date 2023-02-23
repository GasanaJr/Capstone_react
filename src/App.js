import NavLog from "./NavLog";
import NavLogged from "./NavLogged";
import NavAdmin from "./NavAdmin";


//import NavFix from "./NavFix";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const token = localStorage.getItem('auth-token');
  if(token) {
    if(token == 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkZTM3OWExMjNiMGVmMTA5MjQ1YzQ3In0sImlhdCI6MTY3NzE0MjMzNX0.iWSG5iVwWF41lLKiYPvN8OtWiMmUzEE00k5tcQ9pTRY') {
      return (
        <NavAdmin />
      )
    }
    else {
      return (
        <NavLogged />
      )
    }
  }
  else {
    return (
      <NavLog />
    )
  }
    // <div>
    //   <header className="navbar">
    //   <a className="logo"><span>DJ</span></a>
    //    <Link to="*" className="nav-item">Home</Link>
    //    <Link to="/about-me" className="nav-item">About Me</Link>
    //    <Link to="/skills" className="nav-item">Skills</Link>
    //    <Link to="/port" className="nav-item">Portifolio</Link>
    //    <Link to="/blogs" className="nav-item">Blogs</Link>
    //    <Link to="/contact" className="nav-item">Contact</Link>
    //    <Link to="/user" className="nav-item">User</Link>
    //    <Link to="/login" className="nav-item">Login</Link>
    //    <div className="main">
		// 	<div className="bx bx-menu" id="menu-icon"></div>
		// </div>
    //   </header>
    //   <Routes>
    //   <Route path="*" element = {<Homepage />} />
    //   <Route path="/about-me" element = {<AboutMe />} />
    //   <Route path="/contact" element = {<Contact />} />
    //   <Route path="/skills" element= {<Skills />}/>
    //   <Route path="/port" element={<Portifolio />}/>
    //   <Route path="/login" element={<Login />}/>
    //   </Routes>
      
    // </div>
  
}

export default App;

























// import logo from './logo.svg';
// import React from 'react';
// import Card from './components/Card';
// import './App.css';

// export default function App (props) {

//   function handleClick() {
//     let randomNumber = Math.floor(Math.random() * 3) + 1;
//     console.log(randomNumber);
//     let userInput = prompt('Type a Number');
//     alert(`Computer Number: ${randomNumber}, You guessed ${userInput}`);
//   }
//   return(
//     // <div className='App'>
//     // <h1>Task: Add Three Card Elements</h1>
//     // <Card  h2="First card's h2" h3="First card's h3"/>
//     // <Card h2="Second card's h2" h3="Second card's h3" />
//     // <Card h2="Third card's h2" h3="Third card's h3"/>
//     // </div>
//     <div>
//       <h1>Task: Add a button and handle a click event</h1>
//       <button onClick={handleClick}>Guess the number between 1 and 3</button>
//     </div>
//   )
// }
