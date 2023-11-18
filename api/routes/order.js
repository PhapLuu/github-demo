import express from 'express';
import OrderController from '../app/controllers/OrderController.js';
import { verifyToken } from '../middleware/jwt.js';
import createError from '../utils/createError.js';

const router = express.Router();

router.post('/:gigId',verifyToken, OrderController.create);
router.get('/',verifyToken, OrderController.getOrders);


export default router;