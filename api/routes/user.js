import express from 'express';
import UserController from '../app/controllers/UserController.js';
import { verifyToken } from '../middleware/jwt.js';

const router = express.Router();

router.delete('/:id', verifyToken, UserController.delete);

export default router;