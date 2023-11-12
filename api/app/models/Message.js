import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Message = new Schema({
    conversationId:{
        type: String,
        require: true,
    },
    userId:{
        type:String,
        require:true,
    },
    desc:{
        type: String,
        require: true,
    },
},{
    timestamps:true,
});

export default mongoose.model('Message',Message);