import User from '../models/User.js';
import bcrypt from 'bcrypt';

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

        const { password, ...others } = user._doc;
        res.status(200).send('Login successfully')
      } catch (error) {
        res.status(500).send('Something went wrong!');
      }

    };
    logout = async(req,res) =>{

    };
};

export default new AuthController;
