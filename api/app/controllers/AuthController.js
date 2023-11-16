import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import createError from "../../utils/createError.js";

class AuthController {
  
  register = async (req, res, next) => {
    try {
      const hashedPassword = bcrypt.hashSync(req.body.password, 5);
      const newUser = new User({
        ...req.body,
        password: hashedPassword,
      });

      await newUser.save();
      res.status(201).send("User has been created");
    } catch (error) {
      next(error);
    }
  };

  login = async (req, res, next) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      if (!user) return next(createError(404, "User not found!"));

      const validated = bcrypt.compareSync(req.body.password, user.password);
      if (!validated)
        return next(createError(400, "Wrong password or username!"));

      const token = jwt.sign(
        {
          id: user._id,
          isSeller: user.isSeller,
        },
        process.env.JWT_KEY
      );

      const { password, ...others } = user._doc;
      res
        .cookie("accessToken", token, {
          httpOnly: true,
        })
        .status(200)
        .send(others);
    } catch (error) {
      next(error);
    }
  };

  logout = async (req, res) => {
    res.clearCookie("accessToken",{
      sameSite:"none",
      secure:true,
    }).status(200).send("User has been logged out.");
  };
}

export default new AuthController();
