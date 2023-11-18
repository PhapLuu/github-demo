import createError from '../../utils/createError.js';
import Review from '../models/Review.js';
import Gig from '../models/Gig.js';

class ReviewController{

    create = async(req, res, next) => {
        // if(req.isSeller) 
        //     return next(createError('403', "Seller can't create review!"))
        const review = new Review({
            userId: req.userId,
            gigId: req.body.gigId,
            star: req.body.star,
            desc: req.body.desc,
        })
        try {
            const savedReview = await review.save()
            await Gig.findByIdAndUpdate(req.body.gigId,{
                $inc: {totalStars : req.body.star, starNumber: 1}
            })
            res.status(201).send(savedReview)
        } catch (error) {
            next(error)
        }
    }
    getReviews = async(req, res, next) => {
        try {
            const reviews = await Review.find({gigId: req.params.gigId})
            res.status(200).send(reviews)
        } catch (error) {
            next(error);
        }
    }
    delete = async(req, res, next) => {
        try {
            
        } catch (error) {
            next(error)
        }
    }
};

export default new ReviewController;