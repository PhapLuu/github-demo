import express from 'express';
import ReviewController from '../app/controllers/ReviewController.js';
import { verifyToken } from '../middleware/jwt.js';

const router = express.Router();

router.get('/:gigId', ReviewController.getReviews);
router.post('/', verifyToken, ReviewController.create);
router.delete(':id', verifyToken, ReviewController.delete);

export default router;
