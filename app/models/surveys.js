import mongoose from "mongoose";

const Schema = mongoose.Schema;

const SurveySchema = new Schema(
  {
    name: String,
    description: String,
    creator: String,
    expiration: Date,
    questions: [String]
  },
  {
    timestamps: true,
    collection: "surveys",
  }
);

export default mongoose.model("Surveys", SurveySchema);
