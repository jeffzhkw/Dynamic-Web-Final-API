const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
const firebase = require("firebase/app");
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT8ZTKwfM0L_Qm8xXcODYMhre_UIPnSgk",
  authDomain: "dynamic-web-final-74487.firebaseapp.com",
  projectId: "dynamic-web-final-74487",
  storageBucket: "dynamic-web-final-74487.appspot.com",
  messagingSenderId: "661633567457",
  appId: "1:661633567457:web:9c8ca437fa5759b74e45a0",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");
  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  // Pass to next layer of middleware
  next();
});

const indexRoute = require("./routes/index");
const newPost = require("./routes/newPost");
const user = require("./routes/user");

app.use("/", indexRoute); //List of all post
app.use("/newPost", newPost); //add a post
app.use("/user", user); //list of all post of a user

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}.`);
});
