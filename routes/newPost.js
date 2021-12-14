const express = require("express");
const router = express.Router();

//Import firebase
const firestore = require("firebase/firestore");
//Init firestore database
const db = firestore.getFirestore();
//get all articles from firebase

router.get("/", (req, res) => {
  const queryParams = req.query; //Query params from URL
  const { uid, displayName, comment, title, artist, link } = queryParams;

  //Submit post to Firebase
  const setMusicPost = firestore.addDoc(
    firestore.collection(db, "musicposts"),
    {
      uid,
      displayName,
      comment,
      title,
      artist,
      link,
    }
  );

  setMusicPost
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      res.send(error);
    });
});

module.exports = router;
