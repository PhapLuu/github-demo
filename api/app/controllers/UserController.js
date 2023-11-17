import createError from '../../utils/createError.js';
import User from '../models/User.js';

class UserController{
    
    delete = async(req, res, next)=> {
        const user = await User.findById(req.params.id);
        
        if(res.userId !== user._id.toString()){
            return next(createError(403,"You can delete only your account!")) 
        }
        await User.findByIdAndDelete(req.params.id);
        res.status(200).send('deleted.')
    }
    getUser = async(req, res, next) => {
       const user = await User.findById(req.params.id);
       console.log(req)

       res.status(200).send(user)
    }


};

export default new UserController;