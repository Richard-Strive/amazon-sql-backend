const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const db = require("../../secretWeapons/db");

const storage1 = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage1,
  limits: { fileSize: 100000000 },
}).single("img");

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

router.get("/:id/reviews", async (req, res, next) => {
  try {
    const { rows } = await db.query(
      `SELECT reviews.comment FROM products INNER JOIN reviews ON products.id=products_id WHERE products.id=${parseInt(
        req.params.id
      )}`
    );
    res.send(rows);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.render("index", { msg: err });
    } else {
      console.log(req.file.filename);

      res.send("test");
    }
  });
});

module.exports = router;

// router.get("/test/:id2", async (req, res, next) => {
//   try {
//     const { rows } = await db.query(
//       `SELECT * FROM aricle WHERE brand LIKE '%${req.params.id2}%'`
//     );
//     res.send(rows);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send(error);
//   }
// });

// router.post("/product/:id/upload", async (req, res, next) => {
//   try {
//     const { rows } = await db.query(
//       `SELECT * FROM aricle WHERE id=${parseInt(req.params.id)}`
//     );
//     res.send(rows);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send(error);
//   }
// });
