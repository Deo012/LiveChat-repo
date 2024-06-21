const express = require("express"); //an http API
const cors = require("cors"); //allow to call the web site from anywhere
const mongoose = require("mongoose")

const app = express();
app.use(express.json());
app.use(cors({ origin: true}));

app.post("/authenticate", async (req, res) =>{
    const {username} = req.body;
    return res.json({username: username, secret: "sha256..."})
});

const uri = "mongodb://localhost:27017/dbLiveChat";
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () =>{
    console.log("MongoDB connected sucessfully");
})
connection.on("error", console.error.bind(console, "MongoDB connection error: "))

const usersRouter = require("./routes/users");
app.use("/users", usersRouter);

app.listen(3001, ()=>{
    console.log("Serveur is running on port 3001");
});
