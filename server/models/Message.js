import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({});

const Message = mongoose.model("message", MessageSchema);

export default Message;