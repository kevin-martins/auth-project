import { Router } from 'express';
import { signIn, login } from '../controllers/auth';

const router = Router();

router.post('/signin', signIn);
router.post('/login', login);

export default router;
