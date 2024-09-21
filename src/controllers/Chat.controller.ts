import { Request, Response } from "express";
import ChatService from "../models/Chat.service";

const chatService = new ChatService();
const chatController: any = {};

chatController.sendMessage = async (req: Request, res: Response) => {
  try {
    console.log("sendMessage");
    const { message } = req.body;
    const result = await chatService.sendMessage(message);

    // if i do like this i do not need GET request
    /*
    const modifiedMessage = result.message + " + Hello World!";
    res.status(201).json({ message: "Message saved successfully", data: modifiedMessage });
    */

    res.status(201).json({ message: "Message saved successfully", data: result });
  } catch (err) {
    console.log("Error, sendMessage", err);
    res.status(500).json({ error: "Failed to save message" });
  }
};

chatController.getMessage = async (req: Request, res: Response) => {
  try {
    console.log("getMessage");

    const result = await chatService.getMessage();
    const modifiedMessage = result.message + " + Hello World!";

    res.status(200).json({ message: modifiedMessage });
  } catch (err) {
    console.log("Error, getMessage", err);
    res.status(500).json({ error: "Failed to retrieve the message" });
  }
};

export default chatController;
