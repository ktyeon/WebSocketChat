const User = require("../Models/user");
const userController = {};

userController.saveUser = async (userName, sid) => {
  try {
    // check whether the user info is already exist or not
    let user = await User.findOne({ name: userName });

    // if not, create a new user info
    if (!user) {
      user = new User({
        name: userName, 
        token: sid,
        online: true,
      });
    }

    // if it is already exist, change the token
    user.token = sid;
    user.online = true;

    await user.save();
    return user;

  } catch (error) {

    throw new Error(`Error saving user: ${error.message}`);

  }
};


userController.checkUser =async (sid) =>{
    const user = await User.findOne({token:sid})
    if(!user ) throw new Error (" user not founded" )
    return user;
}
module.exports = userController;
