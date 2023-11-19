import Message from "../models/Message.js";
import Conversation from "../models/Conversation.js";
import createError from "../../utils/createError.js";

class MessageController {
  create = async (req, res, next) => {
    console.log(req.body);
    const message = new Message({
      conversationId: req.body.conversationId,
      userId: req.userId,
      desc: req.body.desc,
    });
    try {
      const savedMessage = await message.save();
      await Conversation.findOneAndUpdate(
        { id: req.body.conversationId },
        {
          $set: {
            readBySeller: req.isSeller,
            readByBuyer: !req.isSeller,
            lastMessage: req.body.desc,
          },
        },
            { new: true }
        );

        res.status(201).send(savedMessage)
    } catch (error) {}
  };
  getMessages = async (req, res, next) => {
    const messages = await Message.find({ conversationId: req.params.id });
    console.log(messages);
    res.status(200).send(messages);
    try {
    } catch (error) {}
  };
}

export default new MessageController();
