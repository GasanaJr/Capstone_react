import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import axios from "axios";

export default function Article() {
    const token = localStorage.getItem('auth-token');
    const config = {
        headers: {
            "auth-token": token
        }
    }
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        axios.get('https://junior-capstone-backend.onrender.com/posts', config)
        .then(res => {
            console.log(res);
            setArticles(res.data)
        })
        .catch(error => {
            console.log(error);
        })
    }, []);
    
    return (
        <section>
        <h3>POSTS AVAILABLE ON THE BLOG</h3>
    <table>
        <thead>
            <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Date</th>
            <th>Time</th>
            <th colSpan="3">Action</th>
          </tr>
        </thead>
        {
            articles.map((article) => {
               return(
                <ArticleCard 
                title = {article.title}
                name = {article.name}
                datee = {article.date}
                />
               )
            })
        }
      </table>
    </section>
    )
}