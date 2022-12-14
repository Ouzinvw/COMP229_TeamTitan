import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ResponseSchema = new Schema(
  {
    responseDate: Date,
    responses: [String],
    survey: Schema.Types.ObjectId,
    user: String,
  },
  {
    timestamps: true,
    collection: "responses",
  }
);

export default mongoose.model("Responses", ResponseSchema);
