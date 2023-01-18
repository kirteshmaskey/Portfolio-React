require("dotenv").config();
require("./db/conn");
const express = require("express");
const cors = require("cors");
const router = require("./Routes/router");
const app = express();
const port = 8000; 

app.use(cors());
app.use(express.json());
app.use(router)

app.get("/",(req, res) => {
    res.status(200).json("server starts")
});

app.listen(port, () => {
    console.log("server start");
})