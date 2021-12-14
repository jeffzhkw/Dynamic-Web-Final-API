const express = require("express");
const router = express.Router();

//Import firebase
const firestore = require("firebase/firestore");
//Init firestore database
const db = firestore.getFirestore();
//get all articles from firebase

router.get("/", (req, res) => {
  const musicposts = firestore.getDocs(firestore.collection(db, "musicposts"));

  const musicpostsArray = [];
  //blogposts is a function. call asychroniously
  musicposts
    .then((response) => {
      response.forEach((doc) => {
        musicpostsArray.push(doc.data());
      });
      return res.send(musicpostsArray);
    })
    .catch(function (error) {
      console.log("Error", error);
      return res.send(error);
    });
});

module.exports = router;
