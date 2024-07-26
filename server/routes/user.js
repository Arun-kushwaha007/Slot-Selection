import express from 'express';
import { signup } from '../controller/auth.js';
import { getallusers, updateprofile } from '../controller/users.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/signup', signup);

router.get('/getallusers', getallusers);
router.patch('/update/:id', auth, updateprofile);

export default router;
