import mongoose from "mongoose";
const {Schema} = mongoose;

const User = new Schema({
    fullname:{
        type:String,
    },
    username:{
        type:String,
        required: true,
        unique: true,
    },
    email:{
        type:String,
        required: true,
        unique: true,
    },
    password:{
        type:String,
        required: true,
    },
    country:{
        type:String,
        required: false,
    },
    img:{
        type:String,
        required: false,
    },
    phoneNumber:{
        type:String,
        required: false,
    },
    desc:{
        type:String,
        required: false,
    },
    isSeller:{
        type: Boolean,
        default: false,
    },
},{
    timestamps: true,
})
export default mongoose.model('User', User)