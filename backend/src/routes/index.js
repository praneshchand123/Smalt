import express from 'express';

const router = express.Router();

import login from './login';
router.use('login', login);

export default router;