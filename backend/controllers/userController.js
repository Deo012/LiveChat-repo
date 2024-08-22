const UserModel = require("../models/userModel");

exports.getAlluser = async (req, res, next) => {
    try{
        const successfulResult = await UserModel.find({}).exec();
        res.json(successfulResult);
    }
    catch(error){
        next(error);
    }
};
