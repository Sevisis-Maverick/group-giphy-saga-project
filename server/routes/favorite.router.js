const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite  .. 
router.get("/", async (req, res) => {
  try {
    const allFavorites = await pool.query("SELECT * FROM favorites ORDER BY id");
    res.json(allFavorites.rows);
  } catch (err) {
    res.sendStatus(500);
    console.error(err.message);
  }
}); // END GET Route

// add a new favorite 
router.post('/', async (req, res) => {
  try {
    const { urlString } = req.body;
    console.log(urlString);
    const addURL = await pool.query(
      "INSERT INTO favorites (url) VALUES ($1) RETURNING *", //returning * returns the row that was inserted into the table and stores into addUrl, This has been used for debugging purposes.
      [urlString]
    );
    res.sendStatus(201);
  } catch (err) {
    res.sendStatus(500);
    console.log(err.message);
  }
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
