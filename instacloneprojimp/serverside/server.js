const express = require("express");
const app = express()
const cors = require("cors")
const postInfo = require("./models/post_model")
app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({extended: false}))
app.use(cors())
require("dotenv").config()

const port=process.env.PORT||3003
app.listen(port, () => {
  console.log(`server is running at ${port}`)
})
const mongoose = require("mongoose")
// mongoose.connect("mongodb+srv://instaclone-newone1:imp_123@instaone1.b7iwduj.mongodb.net/?retryWrites=true&w=majority")
// .then(() =>{console.log("Successfully connected")} ).catch((err) => console.log(err))
mongoose.connect("mongodb://localhost/insta-1", (data) => {
    console.log("Successfully connected to db");
}, (err) => {
    console.log(err)
})
app.get("/postview", (req, res) => {
  postInfo.find({}).then((userData) => {
    console.log(userData)
    res.status(200).send(userData)
  }).catch((err)=>{console.log(err)})
});
app.post("/post", (req, res) => {
  console.log(req.body)
  postInfo.create(req.body).then((data) => {
    console.log(data)
    res.status(200).redirect("/")
  })
})
app.get("/",(req,res)=>{
  res.send("backend works")
})