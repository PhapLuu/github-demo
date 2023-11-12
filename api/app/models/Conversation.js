import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Conversation = new Schema({
    id:{
        type: String,
        unique:true,
        require:true,
    },
    sellerId:{
        type: String,
        require:true,
    },
    buyerId:{
        type: String,
        require:true,
    },
    readBySeller:{
        type: Boolean,
        require:true,
    },
    readByBuyer:{
        type: Boolean,
        require:true,
    },
    lastMessage:{
        type: String,
        require:false,
    },
    
    

},{
    timestamps:true,
});

export default mongoose.model('Conversation', Conversation);
