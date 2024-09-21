import ChatModel from "../schema/Chat.model";

class ChatService {
  private readonly chatModel;
  constructor() {
    this.chatModel = ChatModel;
  }

  public async sendMessage(input: String): Promise<any> {
    try {
      const result: any = await this.chatModel.create({ message: input });
      return result.toJSON();
    } catch (error) {
      console.log("Error, model:sendMessage:", error);
      throw new Error("Something went wrong while saving the message");
    }
  }

  public async getMessage(): Promise<any> {
    try {
      const result: any = await this.chatModel.findOne().sort({ _id: -1 });
      if (!result) throw new Error("No messages found");
      return result.toJSON();
    } catch (error) {
      console.log("Error, model:getMessage:", error);
      throw new Error("Something went wrong while fetching the message");
    }
  }
}

export default ChatService;
