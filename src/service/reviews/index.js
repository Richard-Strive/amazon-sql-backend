const router = require("express").Router();
const db = require("../../secretWeapons/db");

router.get("/", async (req, res, next) => {
  try {
    const { rows } = await db.query(`SELECT * FROM products`);
    res.send(rows);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const {
      id,
      name,
      description,
      brand,
      imageurl,
      price,
      category,
    } = req.body;
    const query = `INSERT INTO products (name, description, brand, imageurl, price, category) VALUES ('${name}','${description}','${brand}', '${imageurl}', '${price}', '${category}');`;
    const result = await db.query(query);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const {
      id,
      name,
      description,
      brand,
      imageurl,
      price,
      category,
    } = req.body;
    const query = `UPDATE products SET name='${name}', description='${description}', brand='${brand}', imageurl='${imageurl}', price='${price}', category='${category}' WHERE id=${parseInt(
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
      `DELETE FROM products WHERE id=${parseInt(req.params.id)}`
    );
    res.send(rows);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});
