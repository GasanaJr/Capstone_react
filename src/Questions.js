import MessageCard from "./MessageCard";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Questions() {
    const token = localStorage.getItem('auth-token');
    const config = {
        headers: {
            "auth-token": token
        }
    }
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        axios.get('https://junior-capstone-backend.onrender.com/message', config)
        .then(res => {
            console.log(res)
            setMessages(res.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    return(
        <div>
        <table>
    <thead>
        <tr>
        <th>Email</th>
        <th>Full Name</th>
        <th>Content</th>
        <th>Action</th>
        </tr>
    </thead>
     {
        messages.map((message) => {
            return(
                <MessageCard 
                email = {message.email}
                fullname = {message.name}
                content = {message.content}
                />
            )
        })
     }
      </table>
     </div>
    )

}