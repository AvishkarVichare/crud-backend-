const User = require("../models/User");

exports.getUserController = (req,res)=>{
    res.send("hddi");
}

exports.createUserController = async(req,res)=>{
    try{
        const {name,email} = req.body;
        if(!name || !email)
        throw new Error("name and email can't be empty");

        const userExists = await User.findOne({email});
        if(!userExists)
            throw new Error("Email already exists");

        const user = new User({
            name,
            email,
        });

        const savedUser = await user.save();

        res.status(200).json({
            success:true,
            user,
        });
     
    }
    catch(err){
        res.status(401).json({
            success:false,
            message:err.message,
        })
    }
}
