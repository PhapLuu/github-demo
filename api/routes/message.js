import express from 'express';
import {verifyToken} from '../middleware/jwt.js'
import MessageController from '../app/controllers/MessageController.js';

const router = express.Router()

router.post('/', verifyToken, MessageController.create)
router.get('/:id', verifyToken, MessageController.getMessages)

export default router;