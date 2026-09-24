import express from "express"
import { sendEmails, sendEmailsWithResend } from "../controllers/emails.js";

const router = express.Router();

router.post("/", sendEmailsWithResend )

export default router
