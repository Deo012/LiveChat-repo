const express = require('express'); //import the express module (enable http requests)
const cors = require("cors");
const catalogRoutes = require('./routes/catalog');
const app = express(); //creat an instance of the express application
const port = 5000;  //Port number where to listen to the server

app.use(cors({                          //cors doit etre activé avant de définir les routes
    origin: ["http://127.0.0.1:5173","http://localhost:5173"],
    credentials: true,
}))
app.use("/", catalogRoutes); //use the routes in catalogRoutes



//start the serveur and listen to the port
app.listen(port, ()=>{
    console.log(`Serveur is running on port: ${port}`);
});

//midleware to shoe errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

//connection a la base de donnée

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB = "mongodb://localhost:27017/liveChatDb";

main().catch((err) => console.log(err));
async function main(){
    await mongoose.connect(mongoDB);
    console.log("MongoDB is connected")
}

