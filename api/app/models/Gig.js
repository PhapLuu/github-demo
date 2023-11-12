import mongoose, { mongo } from "mongoose";
const Schema = mongoose.Schema;

const Gig = new Schema({
    username:{
        type:String,
    },
    price:{
        type: String,
    },
    img:{
        type:String,
    },
    desc:{
        type:Text,
    },
    star:{
        type:Number,
    },
    profilePicture:{
        type:String,
    }
},{
    timestamps:true,
})
export default mongoose.model('Gig', Gig);