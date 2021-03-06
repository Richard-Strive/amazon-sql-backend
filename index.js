const express = require("express");
const cors = require("cors");
const service = require("./src/service");
const server = express();

server.use(express.json());
server.use(express.static("/public"));
server.use(cors());

const PORT = process.env.PORT || 5001;

server.use("/api", service);

server.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});

server.on("error", (error) => {
  console.error(" ❌ Error : server is not running :  " + error);
});
