const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = new schema({

    nom: String,
    prenom: String,
    motsDePasse: String,
    profilImage: String
});


const User = mongoose.model("users", userSchema);

module.exports = User;
