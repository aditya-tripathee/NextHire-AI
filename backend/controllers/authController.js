import genToken from "../config/genToken.js";
import User from "../models/user.models.js";

// frontend se data lekar aayenge like name , email
// create user - token - cookie
export const googleAuth = async (req, res) => {
  try {
    const { name, email } = req.body;
    // existing user
    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({
        name,
        email,
      });
    }

    // create token and store in cookie
    let token = await genToken(user._id);

    res.cookie("token", token,{
        httpOnly:true,
        sameSite:"strict",
        secure:false,
        maxAge:7*24*60*60*1000
    });

    return res.status(200).json({message:"User created successfully", success:true, user});

  } catch (error) {
    return res.status(500).json({message:`Google auth error ${error}`})
  }
};


export const logout = async(req,res)=>{
    try {
        res.clearCookie("token");
        return res.status(200).json({message:"Logout successfully",success:true});
    } catch (error) {
        return res.status(500).json({message:`Logout error ${error}`})
    }
}


