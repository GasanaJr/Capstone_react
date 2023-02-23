import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./Homepage";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Skills from "./Skills";
import Portifolio from "./Portifolio";
import Login from "./Login";
import Blogs from "./Blogs";
import LogOut from "./LogOut";
import './assets/css/blog.css'
import  './assets/css/resp.css'
import  './assets/css/about.css'
import './assets/css/style.css'
import './assets/css/port.css'
function NavLogged() {
    return(
        <div>
      <header className="navbar">
      <a className="logo"><span>DJ</span></a>
       <Link to="*" className="nav-item">Home</Link>
       <Link to="/about-me" className="nav-item">About Me</Link>
       <Link to="/skills" className="nav-item">Skills</Link>
       <Link to="/port" className="nav-item">Portifolio</Link>
       <Link to="/blogs" className="nav-item">Blogs</Link>
       <Link to="/contact" className="nav-item">Contact</Link>
       <Link to="/user" className="nav-item">User</Link>
       <Link to="/logout" className="nav-item">Logout</Link>
       <div className="main">
			<div className="bx bx-menu" id="menu-icon"></div>
		</div>
      </header>
      <Routes>
      <Route path="*" element = {<Homepage />} />
      <Route path="/about-me" element = {<AboutMe />} />
      <Route path="/contact" element = {<Contact />} />
      <Route path="/skills" element= {<Skills />}/>
      <Route path="/port" element={<Portifolio />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/blogs" element={<Blogs />}/>
      <Route path="/logout" element={<LogOut />}/>
      </Routes>
      
    </div>
    );
};

export default NavLogged;