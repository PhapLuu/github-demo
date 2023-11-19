import Conversation from '../models/Conversation.js'
import createError from '../../utils/createError.js';

class ConversationController{
    getConversations = async(req, res, next) =>{
        try {
            const conversations = await Conversation.find(
                req.isSeller ? { sellerId: req.userId} : {buyerId: req.userId}
            );
            res.status(200).send(conversations);
        } catch (error) {
            next(error)
        }
    }
    getConversation = async(req, res) =>{
        try {
            const conversation = await Conversation.findById(req.params.id);
            res.status(200).send(conversation);            
        } catch (error) {
            next(error)
        }
    }
    update = async(req, res, next) =>{
        // try {
        //     console.log(typeof(req.params.id))
        //     console.log(req.isSeller)
        //     const updatedConversation = await Conversation.findOneAndUpdate(
        //         { id: new ObjectId(req.params.id) },
        //         {
        //             $set: {
        //                 ...(req.isSeller ? {readBySeller: true} : {readByBuyer: true}),
        //             },
        //         },
        //         { new: true }
        //     );
        //     console.log(updatedConversation)
        //     res.status(200).send(updatedConversation);
        // } catch (error) {
        //     next(error)
        // }
        try {
            const updatedConversation = await Conversation.findOneAndUpdate(
              { id: req.params.id},
              {
                $set: {
                  // readBySeller: true,
                  // readByBuyer: true,
                  ...(req.isSeller ? { readBySeller: true } : { readByBuyer: true }),
                },
              },
              { new: true }
            );
            res.status(200).send(updatedConversation);
          } catch (err) {
            next(err);
          }
    }
    create = async(req, res) =>{
        const conversation = new Conversation({
            id: req.isSeller ? req.userId + req.body.to : req.body.to + req.userId,
            sellerId: req.isSeller ? req.userId : req.body.to,
            buyerId: req.isSeller ? req.body.to : req.userId,
            readBySeller: req.isSeller,
            readByBuyer: !req.isSeller,
        });

        try {
            const savedConversation = conversation.save();
            res.status(201).send(savedConversation);
        } catch (error) {
            next(error)
        }
    }
};
export default new ConversationController;