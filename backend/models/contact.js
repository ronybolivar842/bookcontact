import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
  telephone: Number,
  mobile: Number,
});

const contact = mongoose.model("contact", schema);

export default contact;
