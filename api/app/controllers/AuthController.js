import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class AuthController{
    register = async(req,res)=> {
        try {
          const hashedPassword = bcrypt.hashSync(req.body.password, 5);
          const newUser = new User({
            ...req.body,
            password: hashedPassword,
          });

          await newUser.save();
          res.status(201).send("User has been created")
        } catch (error) {
          res.status(500).send('Something went wrong!');
        }  
    };
    login = async(req,res)=>{
      try {
        const user = await User.findOne({username: req.body.username});
        if(!user) return res.status(400).send('User not found');
        
        const validated = bcrypt.compareSync(req.body.password, user.password);
        if(!validated) return res.status(400).send('Wrong password or username');

        const token = jwt.sign(
        {
          id: user._id,
          isSeller: user.isSeller,
        },
        process.env.JWT_KEY 
      );

        const { password, ...others } = user._doc;
        res
          .cookie("accessToken", token,
          {
            httpOnly: true,
          })
          .status(200)
          .send(others)
      } catch (error) {
        res.status(500).send('Something went wrong!');
      }

    };
    logout = async(req,res) =>{

    };
};

export default new AuthController;
