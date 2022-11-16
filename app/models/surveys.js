import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const SurveySchema = new Schema({
    name: String, 
    number: String, 
    email: String,
}, {
    timestamps: true,
    collection: 'surveys'
});

export default mongoose.model('Surveys', SurveySchema);