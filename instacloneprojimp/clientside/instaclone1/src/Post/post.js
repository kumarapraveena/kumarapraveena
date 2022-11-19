import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FileBase64 from "react-file-base64";
import "./post.css"
import Header from "../Header/header";
const Post = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    author: "",
    location: "",
    desc: "",
    image: "",
  });
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    //console.log(post)
  axios({
      method: "POST",
      url: "https://create-insta-clone.herokuapp.com/",
      data: post,
    }) .then(()=>{ navigate("/postview")}).catch((err)=>{console.log(err)})
   
   
      // .then(() => {
      //   navigate(-1);
      // })
      .catch((err) => {
        console.log(err);
      }, []);
  };
  return (
    <>
    <Header/>
        <div>
          <form action="" onSubmit={onSubmitHandler}>
            <div className="container">
              <div className="box">
                
                <div className="image">
                  <FileBase64 type="file" multiple={false} onDone={({ base64 }) => setPost({ ...post, image: base64 })}></FileBase64>
                </div>
                
                <div className="auth_loc">  
                  <input className="auth" type="text" placeholder="Author" onChange={(e) => setPost({ ...post, author: e.target.value })}/>  
                  <input className="location" type="text" placeholder="Location" onChange={(e) => setPost({ ...post, location: e.target.value })}/>
                </div>
                
                <div className="desc">  
                  <input className="msg" type="text" placeholder="Description" onChange={(e) => setPost({ ...post, desc: e.target.value })}/>
                </div>
                
                <div className="post">
            <button className={(post.author === "" && post.location === "" && post.desc === "" && post.image === "") ? "btn" : "clrbtn"} type="submit">Post</button>
                </div>
              </div>
            </div>
          </form>
        </div>
    </>
  );
};
export default Post