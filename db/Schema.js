import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
});

export const Note = new mongoose.model("Note", noteSchema);