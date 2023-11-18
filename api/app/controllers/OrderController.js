import Order from '../models/Order.js';
import Gig from '../models/Gig.js';
import createError from '../../utils/createError.js';

class OrderController{
    create = async(req, res, next)=> {
        try {
            const gig = await Gig.findById(req.params.gigId)

            const order = new Order({
                gigId: gig._id,
                image: gig.cover,
                title: gig.title,
                buyerId: req.userId,
                sellerId: gig.userId,
                price: gig.price,
                payment_intent: "temporary",
            })

            await order.save();
            res.status(200).send("successful")
        } catch (error) {
            next(error)
        }
    };
    getOrders = async(req, res, next)=> {
        const orders = await Order.find({
            ...(req.isSeller ? {sellerId: req.userId} : {buyerId: req.userId}),
            isCompleted: true,
        });

        res.status(200).send(orders);
    }
};

export default new OrderController;