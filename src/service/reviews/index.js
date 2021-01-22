const router = require("express").Router();
const db = require("../../secretWeapons/db");

router.get("/", async (req, res, next) => {
  try {
    const { rows } = await db.query(`SELECT * FROM reviews`);
    res.send(rows);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { id, comment, rate, products_id } = req.body;
    const query = `INSERT INTO reviews (comment,  rate,  products_id) VALUES ('${comment}','${rate}','${products_id}');`;
    const result = await db.query(query);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { id, comment, rate, products_id } = req.body;
    const query = `UPDATE reviews SET comment='${comment}',rate='${rate}', products_id='${products_id}' WHERE id=${parseInt(
      req.params.id
    )};`;
    const result = await db.query(query);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { rows } = await db.query(
      `DELETE FROM reviews WHERE id=${parseInt(req.params.id)}`
    );
    res.send(rows);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
