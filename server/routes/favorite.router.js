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


//PUT Route
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let { category, category_id } = req.body;
    console.log('updating', id, category, category_id);
    const updateCategory = await pool.query(//pauses here until the Promise is resolved (that is, something is returned or we have an error)
      "UPDATE favorites SET category = $1 WHERE id = $2",
      [category, id]
    );
    const updateCategoryId = await pool.query(
      "UPDATE favorites SET category_id = $1 WHERE id = $2",
      [category_id, id]
    );
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500);
    console.log(err.message);
  }
}); //END PUT Route

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
