const express = require("express");
const router = express.Router();

//Import firebase
const firestore = require("firebase/firestore");
//Init firestore database
const db = firestore.getFirestore();
//get all articles from firebase of current user

router.get("/:uid", (req, res) => {
  const uid = req.params.uid;
  console.log(uid);
  const q = firestore.query(
    firestore.collection(db, "musicposts"),
    firestore.where("uid", "==", uid)
  );

  const musicpostsArray = [];
  //blogposts is a function. call asychroniously
  firestore
    .getDocs(q)
    .then((response) => {
      response.forEach((doc) => {
        musicpostsArray.push(doc.data());
      });
      res.send(musicpostsArray);
    })
    .catch(function (error) {
      console.log("Error", error);
      res.send(error);
    });
});

module.exports = router;
