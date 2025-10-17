import express from 'express';
import { sendContactEmail, getContacts } from '../controllers/contactController.js';

const router = express.Router();

router.route('/').post(sendContactEmail).get(getContacts);

export default router;