import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  homeImage1: {
    type: String,
    default: null,
  },
  homeImage2: {
    type: String,
    default: null,
  },
  aboutImage: {
    type: String,
    default: null,
  },
  workCompleted: {
    type: Number,
  },
  yearsExperience: {
    type: Number,
  },
  totalClient: {
    type: Number,
  },
  awards: {
    type: Number,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

let User;

if (models?.User) User = model("User");
else User = model("User", UserSchema);

export default User;
