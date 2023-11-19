import express from 'express';
import ConversationController from '../app/controllers/ConversationController.js';
import { verifyToken } from '../middleware/jwt.js';

const router = express.Router()

router.get('/', verifyToken, ConversationController.getConversations);
router.delete('/single/:id', verifyToken, ConversationController.getConversation);
router.post('/', verifyToken, ConversationController.create);
router.put('/:id', verifyToken, ConversationController.update);

export default router;