import image from './img/images (1).jpeg'
import tick from './img/tickk.png'
import './assets/css/contact.css'
import { useState } from 'react';
import React from 'react'
function Contact() {
 
    const [message, setMessage] = React.useState({
        name: "",
        email: "",
        text: ""
    });
    
    const handleChange = (e) => {
        const {name, value} = e.target;

        setMessage((state) => ({...state, [name]: value}));
    
    };
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        // const payload = {name: message.name, email: message.email, content: message.text};
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const content = document.getElementById('text').value;
        const result = await fetch('https://junior-capstone-backend.onrender.com/message/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                content
            })
        });
        const data = await result.json();
        if(result.status == 200) {
          //swal("Message Sent", "We will get to you ASAP", "success");
        }
        else {
            //swal("Message Not Sent", "Please correct the Errors shown", "error");
        }
        console.log(message)
    
    }
    
    
    return (
        <>
         <div class="container">
        <div class="popup" id="popup">
            <img src={tick} />
            <h2>Thank You!</h2>
            <p>Your Message has been successfully sent. Thanks</p>
            <button type="button" id="cbtn">OK</button>
        </div>
       </div>
        <section className='contact'>
             <form id = "form" onSubmit={handleSubmit}>
                <h3>Reach out to me</h3> 
                <label for="">Email</label><br></br>
                 <input type="text" onChange={handleChange} name = "email" id="email"/><br></br>
                 <label for="">Full Name</label><br></br>
                 <input type="text" name = "name" id="name" onChange={handleChange} /><br></br>
                 <label for="">Content</label><br></br>
                 <textarea name="text" id="text" onChange={handleChange}></textarea>
                 <button type="submit" >Send</button>
             </form>
              <div className="cimage">
                 <img src={image} alt=""/>
                 <p><i className="fa-solid fa-envelope"></i>gasanajr08@gmail.com</p>
                 <p><i className="fa-solid fa-mobile-screen"></i>0738930843</p>
             </div>
    
         </section>
        </>
    );

    

    }

export default Contact;