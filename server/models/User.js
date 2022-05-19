import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({});

const User = mongoose.model("user", UserSchema);

export default User;
