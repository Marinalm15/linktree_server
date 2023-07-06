import { model, Schema } from "mongoose";

export const Article = model(
  "Article",
  new Schema({
    name: { type: String, required: true },
    url: { type: String, required: true },
    imagePath: { type: String },
    createdAt: { type: Date, default: Date.now },
  })
);

