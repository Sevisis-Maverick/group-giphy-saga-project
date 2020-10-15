const axios = require("axios");
require("dotenv").config();//needed for line 7.
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    
  let stringParameter = `?api_key=${process.env.GIPHY_API_KEY}`;//this is where your personal API key goes.
  // if (req.params.tag) { 
  //     stringParameter = stringParameter.concat(`&q=${req.params.tag}`);
  // }
  const { searchParameter } = req.body
  stringParameter = stringParameter.concat(`&q=${searchParameter}`); //building the string up
  stringParameter = stringParameter.concat(`&limit=10`); //reduce the 'beta'/default limit from 50 to 10 imgObj returned from 3rd party API
  
  stringParameter = `https://api.giphy.com/v1/gifs/search${stringParameter}`
  console.log(stringParameter);
    axios
      .get(`${stringParameter}`)
      .then((response) => {
        //loop over response.data.data
        //for each iteration, we need to push the image url into an array
        let arrOfUrlImages = [];
        let arrOfImgObjs = response.data.data;
        for (let i = 0; i < arrOfImgObjs.length; i++) {
          const imgObj = arrOfImgObjs[i];
          arrOfUrlImages.push(imgObj.images.downsized_large.url);
        }
        console.log(arrOfUrlImages);
        console.log(arrOfUrlImages.length);

        res.status(200).send(arrOfUrlImages); //pass array of URL images to frontend for rendering
      })
      .catch((error) => {
        console.log(error);
        res.status(400).send(error);
      });
  });
module.exports = router;
