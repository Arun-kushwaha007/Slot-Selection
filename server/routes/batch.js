import express from 'express';
import { Addbatch, getallbatch, deletebatch, votebatch, joinBatch } from '../controller/Batch.js';
import authmentor from '../middleware/authmentor.js';

const router = express.Router();

router.post('/Add', authmentor, Addbatch);
router.get('/get', getallbatch);
router.delete('/delete/:id', authmentor, deletebatch);
router.patch('/vote/:id', authmentor, votebatch);
router.patch('/:id/join', authmentor, joinBatch); // New route for joining a batch

export default router;
