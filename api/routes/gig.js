import express from 'express';
import GigController from '../app/controllers/GigController.js';
import { verifyToken } from '../middleware/jwt.js';

const router = express.Router();

router.post('/', verifyToken, GigController.create);
router.delete('/:id', verifyToken, GigController.delete);
router.get('/single/:id', GigController.getGig);
router.get('/', GigController.getGigs);

export default router;