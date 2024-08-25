import express from 'express';
import {dummyExam, generateExam} from "../controllers/openai.controller.js";
const router = express.Router();

router.post('/generate-questions', generateExam);
router.post('/test', dummyExam)

export default router;

