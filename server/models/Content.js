import mongoose from "mongoose";

const contentSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    customUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Content = mongoose.model("Content", contentSchema);

export default Content;
