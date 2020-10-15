const axios = require("axios");
require("dotenv").config();//needed for line 7.
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    console.log('in get request of /search endpoint', req.body);
    let stringParameter = `?api_key=${process.env.GIPHY_API_KEY}`;//this is where your personal API key goes.
    // if (req.params.tag) { 
    //     stringParameter = stringParameter.concat(`&q=${req.params.tag}`);
    // }
    const { searchParameter } = req.body
    stringParameter = req.body && stringParameter.concat(`&q=${searchParameter}`); //building the string up
    console.log(stringParameter);
  axios
    .get(`api.giphy.com/v1/gifs/search${stringParameter}`)
    .then((response) => {
      console.log(response.data);
      res.status(200).send(response.data);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).send(error);
    });
});

module.exports = router;
