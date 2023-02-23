import { Routes, Route, Link } from "react-router-dom";
import Admin from "./Admin";
import Questions from "./Questions";
import Article from "./Article";
import Post from "./Post";
import LogOut from "./LogOut";
import './assets/css/admin.css'
import './assets/css/queries.css';
import './assets/css/post.css';
export default function NavAdmin() {
    return(
        <div>
      <header className="navbar">
      <a className="logo"><span>DJ</span></a>
       <Link to="/admin" className="nav-item">Home</Link>
       <Link to="/queries" className="nav-item">Questions</Link>
       <Link to="/article" className="nav-item">Articles</Link>
       <Link to="/post" className="nav-item">Posts</Link>
       <Link to="/blogs" className="nav-item">Subscribers</Link>
       <Link to="/user" className="nav-item">User</Link>
       <Link to="/logout" className="nav-item">Logout</Link>
       <div className="main">
			<div className="bx bx-menu" id="menu-icon"></div>
		</div>
      </header>
       <Routes>
      <Route path="/admin" element = {<Admin />} />
       <Route path="/queries" element = {<Questions />} />
      <Route path="/article" element = {<Article />} />
      <Route path="/post" element= {<Post />}/>
      <Route path="/logout" element={<LogOut />}/>
      { /* <Route path="/login" element={<Login />}/>
      <Route path="/blogs" element={<Blogs />}/> */}
      </Routes> 
      
    </div>
    );
};