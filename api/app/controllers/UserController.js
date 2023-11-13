import User from '../models/User.js';

class UserController{
    
    delete = async(req, res)=> {
        const user = await User.findById(req.params.id);
        
        if(res.userId !== user._id.toString()){
            return res.status(403).send("You can delete only your account!");
        }
        await User.findByIdAndDelete(req.params.id);
        res.status(200).send('deleted.')
    }


};

export default new UserController;