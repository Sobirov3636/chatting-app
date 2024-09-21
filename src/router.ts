import express from "express";
import chatController from "./controllers/Chat.controller";
const router = express.Router();

router.post("/message", chatController.sendMessage);
router.get("/message", chatController.getMessage);
export default router;
