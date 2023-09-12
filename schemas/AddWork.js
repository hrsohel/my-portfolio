import { Schema, model, models } from "mongoose";

const WorkSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
    },
    category: {
      type: String,
      trim: true,
    },
    desc: {
      type: String,
      trim: true,
    },
    client: {
      type: String,
      trim: true,
    },
    url: {
      type: String,
      trim: true,
    },
    github: {
      type: String,
      trim: true,
    },
    date: {
      type: Date,
    },
    image: {
      public_id: { type: String },
      url: { type: String },
    },
    carouselImages: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

let Work;

if (models?.Work) Work = model("Work");
else Work = model("Work", WorkSchema);

export default Work;
