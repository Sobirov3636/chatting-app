import mongoose, { Schema } from "mongoose";

const chatSchema = new Schema(
  {
    message: {
      type: String,
    },
  },
  { timestamps: true } // updatedAt, createdAt
);

export default mongoose.model("Chat", chatSchema);
