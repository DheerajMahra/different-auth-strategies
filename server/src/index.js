const express = require("express");
const cors = require('cors');
const app = express();
const PORT = 4000;
require('dotenv').config();

const router = require("./routes");

app.use(cors());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})