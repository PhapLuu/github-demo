import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Gig = new Schema({
    userId:{
        type: String,
        required: true,
    },
    title:{
        type: String,
        required: true,
    },
    desc:{
        type: Text,
        required: true,
    },
    cat:{
        type:String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    userAvatar:{
        type: String,
        required: true,
    },
    cover:{
        type: String,
        required: true,
    },
    images:{
        type: [String],
        required: false,
    },
    shortTitle:{
        type: String,
        required: true,
    },
    shortDesc:{
        type: String,
        required: true,
    },
    deliveryTime:{
        type: Number,
        required: true,
    },
    revisionNumber:{
        type: Number,
        required: true,
    },
    features:{
        type: [String],
        required: false,
    },
    totalStars:{
        type: Number,
        default: 0,
    },
    star:{
        type: Number,
        default: 0,
    },
    sales:{
        type: Number,
        default: 0,
    },
},
{
    timestamps:true,
})

export default mongoose.model('Gig', Gig);