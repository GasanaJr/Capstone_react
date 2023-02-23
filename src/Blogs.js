import { useState, useEffect } from "react";
import axios from "axios";
import './assets/css/blog.css'
import PostCard from "./PostCard";

export default function Blogs() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get('https://capstone-backend-didas.onrender.com/posts')
        .then(res => {
            console.log(res);
            setPosts(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);
    return(
      <section className="blog">
          <div className="blogs">
            <div className="blo">
                {
                    posts.map((post) => {
                        return (
                            <PostCard 
                            image={post.Image}
                            title={post.title}
                            description={post.description}
                             />
                        )
                    })
                }
            </div>
        </div>
      </section>
    )
}