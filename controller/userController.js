const User = require("../models/User");


// create user 
exports.createUserController = async(req,res)=>{
    try{
        const {name,email} = req.body;
        if(!name || !email)
        throw new Error("name and email can't be empty");

        const userExists = await User.findOne({email});
        if(userExists)
            throw new Error("Email already exists");

        const user = new User({
            name,
            email,
        });

        const savedUser = await user.save();

        res.status(200).json({
            success:true,
            savedUser,
        });
     
    }
    catch(err){
        res.status(401).json({
            success:false,
            message:err.message,
        })
    }
}

// get user 
exports.getUsersController = async ()=>{
    try{
        const users = await User.find();
        res.json({
            success:true,
            users,
        });

    }
    catch(err){
        res.status(401).json({
          success: false,
          message: err.message,
        });
    }
}

// edit user 
exports.editUserController = async (req, res) => {
    try {
      const {id} = req.params;
  
      const userExists = await User.findById(id);
      if(!userExists)
        throw new Error("No such User exists");
  
      const user = await User.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json({
        success: true,
        message: "User updated Successfully",
      });
    } catch (err) {
      res.status(401).json({
        success: false,
        message: err.message,
      });
    }
  };

  exports.deleteUserController = async (req, res)=>{
    try{
        const {id} = req.params;
        const userExists = await User.findById(id);
        if(!userExists)
        throw new Error("No such user Exists");

        const deleteUser = await User.findByIdAndDelete(id);

        res.status(200).json({
            success:true,
            message: "Deleted successfully",
        })

    }
    catch(err){
        res.status(401).json({
            success:false,
            message:err.message,
        })
    }
  }