import { useState, useEffect } from "react";
import axios from "axios";
export default function Post() {
    const token = localStorage.getItem('auth-token');
    const config = {
        headers: {
            "auth-token": token,
            "Content-Type": "multipart/form-data"
        }
    }
    
    const [data, setData] = useState({
        title: "",
        content: "",
        file: ""
    });

    const handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setData((state) => ({...state, [name]: value}));
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        // const title = document.querySelector("#title");  
        // const description = document.querySelector('#text');
        // const files = document.getElementById('file');
        //     axios.post('https://junior-capstone-backend.onrender.com/posts',{
        //         title: title,
        //         description: description,
        //         files: files
        //     }, config)
        //     .then(res => {
        //         console.log(res);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     })
        // }
        const title = document.querySelector("#title");  
    const description = document.querySelector('#text');
    const files = document.getElementById('file');
    const formData = new FormData();
    formData.append('title', title.value);
    formData.append('description', description.value);
    for(let i =0; i<files.files.length; i++) {
        formData.append('image', files.files[i]);
    }


    // Validate

    if (title == "" || description == "") {
        console.log("Fill all fields")
    }

    else {
       const result = await fetch('https://junior-capstone-backend.onrender.com/posts', {
        method: 'POST',
        headers: {
            // "Content-Type": "multipart/form-data",
            "auth-token": token
        },
        body: formData
       });

       const data = await result.json();
       if(result.status == 201) {
        console.log(data.Message);
       }
       else {
        console.log(data.Message);
       }



    }
}
    



    return(
        <section>
        <h3>Add a new post</h3>
       <form action="" id="post-form" onSubmit={handleSubmit}>
           <div>
               <label htmlFor="">Title</label>
               <input type="text" className="text-input" name="title" id="title" onChange={handleChange}/>
           </div>
           <div>
               <label htmlFor="">Content</label>
               <input type="text" id = "text" className="text-input" onChange={handleChange}/>
           </div>
           <div>
               <input type="file" name="" id="file" multiple onChange={handleChange}/>
           </div>
           <button type="submit" className="button">Add post</button>
       </form>
</section>
    )

}