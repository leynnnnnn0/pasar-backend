import express from 'express';

import {createUser, signInUser} from "../controllers/user.controller.js";
const router = express.Router();

router.post('/create', createUser);

router.post('/sign-in', signInUser);
export default router;