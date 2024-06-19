const express = require("express"); //an http API
const cors = require("cors"); //allow to call the web site from anywhere

const app = express();
app.use(express.json());
app.use(cors({ origin: true}));

app.post("/authenticate", async (req, res) =>{
    const {username} = req.body;
    return res.json()
});