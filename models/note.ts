import mongoose, { Schema, models } from "mongoose";

const value = new Schema({
  typeValue: String,
  value: String,
});

const NoteSchema = new Schema({
  headline: {
    type: String,
    required: true,
  },
  valueNote: {
    type: [value],
    required: true,
  },
  creatorId: {
    type: String,
    required: true,
  },
});

const Note = models?.Note || mongoose.model("Note", NoteSchema);
export default Note;
