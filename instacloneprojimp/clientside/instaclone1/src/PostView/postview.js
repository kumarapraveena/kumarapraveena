import React, {useState, useEffect} from "react";
import Header from "../Header/header";
import axios from "axios";
import like from "../Images/heart.png"
import share from "../Images/share.png"
import "./postview.css"
function Postview (props) {
    const [data, setData] = useState([])//
    useEffect(() =>{
        axios({
            method: "GET",
            url: "https://create-insta-clone.herokuapp.com/",
            
        }).then((userData) => {
            console.log(userData)
            setData((userData.data).reverse())
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <>
            <Header/>
            {data.map((elem, i) => {
        return (
          <div className="block">
            <div className="block-header">
              <div key={i}>
                <b>{elem.author}</b>
                <p className="loc">{elem.location}</p>
              </div>
              <p className="dots">...</p>
            </div>

            <div>
              <img className="postImage" src={elem.image} alt="Wait still not found"/>
            </div>

            <div className="img">
              <img id="like" src = {like} alt="Wait still not found"></img>
              <img id="share" src={share} alt="Wait still not found"></img>
              <span>{elem.date}</span>
            </div>
            <p className="likes">{ "43M likes"}</p>
            <p className="likes"><b>{elem.desc}</b></p>
          </div>
        );
      })}
        </>
    ) 
}
export default Postview