const router = require("express").Router();
let User = require("../models/userModel");

router.route("/:username")
    .get( async (req, res) => {
        try{
            const{username} = req.params;
            const user = await User.findOne({usename});
            if(user){
                res.json(user);
            }else{
                res.status(404).json({message: "Usr not found"})
            }
        }
        catch(error){
            res.status(500).json({error: error.message});
        }
});

router.route("/add").post((req, res) => {
    const username = req.body.username;
    
    const newUser = new User({username}); 

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;