import junior from './img/junior.png'
import Contact from './Contact';
import { Route,Routes,Link } from 'react-router-dom';
function Homepage() {
    return (
        <section>
        <div className="contentOne">
        <h1>Hey there!</h1>
        <h1> <span>I am</span> Didas Junior</h1>
        <p>I'm  a software developer with deep interest in interactive web development and mobile applications.
            I am a quick learner and gives all my best. </p>
        <Link to = "/contact">Hire Me</Link>
        <Routes>
            <Route path='/contact' element={<Contact />}/>
        </Routes>
    </div>
    
    <div className="profile">
        <img src={junior} alt=""/>
    </div>
    </section>
    )
};

export default Homepage;