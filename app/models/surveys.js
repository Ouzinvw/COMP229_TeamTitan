import mongoose from "mongoose";

const Schema = mongoose.Schema;

const SurveySchema = new Schema(
  {
    // values should be changed
    name: String,
    number: String,
    email: String,
    expiration: Date,
  },
  {
    timestamps: true,
    collection: "surveys",
  }
);

export default mongoose.model("Surveys", SurveySchema);
