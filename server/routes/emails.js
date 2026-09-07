import express from "express"
import { sendEmails } from "../controllers/emails.js";

const router = express.Router();

router.post("/", sendEmails )

export default router
