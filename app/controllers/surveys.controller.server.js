import surveyModel from '../models/surveys.js';
import { UserDisplayName } from '../utils/index.js';

export function DisplaySurveyList(req, res, next){
    surveyModel.find(function(err, surveyCollection) {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', {title: 'Survey List', page: 'surveys/list', surveys: surveyCollection, displayName: UserDisplayName(req)});
    })
}

export function DisplaySurveyAddPage(req, res, next){
    res.render('index', { title: 'Add Survey', page: 'surveys/edit', survey: {} , displayName: UserDisplayName(req)});
}

export function ProcessSurveyAddPage(req, res, next){
    
    let newSurvey = surveyModel({
        name: req.body.name,
        number: req.body.number,
        email: req.body.email,
    });

    surveyModel.create(newSurvey, (err, Survey) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/survey-list')
    } )
}

export function DisplaySurveyEditPage(req, res, next){
    let id = req.params.id;

    surveyModel.findById(id, (err, survey) => {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', { title: 'Edit Survey', page: 'surveys/edit', survey: survey, displayName: UserDisplayName(req) });
    });    
}

export function ProcessSurveyEditPage(req, res, next){

    let id = req.params.id;
    
    let newSurvey = surveyModel({
        _id: req.body.id,
        name: req.body.name,
        number: req.body.number,
        email: req.body.email,
    });

    surveyModel.updateOne({_id: id }, newSurvey, (err, Survey) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/survey-list')
    } )
}

export function ProcessSurveyDelete(req, res, next){
    let id = req.params.id;

    surveyModel.remove({_id: id}, (err) => {
        if (err){
            console.error(err);
            res.end(err);
        }

        res.redirect('/survey-list');
    })
}