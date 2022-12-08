import surveyModel from "../models/surveys.js";
import { UserDisplayName } from "../utils/index.js";

export function DisplaySurveyList(req, res, next) {
  surveyModel.find({expiration:{$gte:Date.now()}},function (err, surveyCollection) {
    if (err) {
      console.error(err);
      res.end(err);
    }

    res.render("index", {
      title: "Survey List",
      page: "surveys/list",
      surveys: surveyCollection,
      displayName: UserDisplayName(req),
      user: req.user,
    });
  });
}

export function DisplaySurveyAddPage(req, res, next) {
  res.render("index", {
    title: "Add Survey",
    page: "surveys/edit",
    survey: {},
    displayName: UserDisplayName(req),
  });
}

export function ProcessSurveyAddPage(req, res, next) {
  let newSurvey = surveyModel({
    name: req.body.name,
    number: req.body.number,
    email: req.body.email,
    expiration: req.body.expiration,
  });

  surveyModel.create(newSurvey, (err, Survey) => {
    if (err) {
      console.error(err);
      res.end(err);
    }

    res.redirect("/survey-list");
  });
}

export function DisplaySurveyEditPage(req, res, next) {
  let id = req.params.id;

  surveyModel.findById(id, (err, survey) => {
    if (err) {
      console.error(err);
      res.end(err);
    }

    res.render("index", {
      title: "Edit Survey",
      page: "surveys/edit",
      survey: survey,
      displayName: UserDisplayName(req),
    });
  });
}

export function ProcessSurveyEditPage(req, res, next) {
  let id = req.params.id;

  let newSurvey = surveyModel({
    _id: req.body.id,
    name: req.body.name,
    number: req.body.number,
    email: req.body.email,
    expiration: req.body.expiration,
  });

  surveyModel.updateOne({ _id: id }, newSurvey, (err, Survey) => {
    if (err) {
      console.error(err);
      res.end(err);
    }

    res.redirect("/survey-list");
  });
}

export function ProcessSurveyDelete(req, res, next) {
  let id = req.params.id;

  surveyModel.remove({ _id: id }, (err) => {
    if (err) {
      console.error(err);
      res.end(err);
    }

    res.redirect("/survey-list");
  });
}

export function ProcessSurveyLifetime(req, res, next) {
  let id = req.params.id;
  let expiration = req.params.expiration;
  // let activationDate = new Date(req.activationDate).toISOString();
  // let expirationDate = new Date(req.expirationDate).toISOString();

  // surveyModel.jwt.sign({_id: id, lifetime: activationDate}, (err) = {
  //     if (err) {
  //         console.error(err);
  //         res.end(err);
  //     }
  // });

  surveyModel.findById(id, (err, survey) => {
    if (err) {
      console.error(err);
      res.end(err);
    }

    if (Date.now() = expiration) {
      survey.remove();
    }
  });

  // surveyModel.remove({_id: id, lifetime: expirationDate}, (err) = {
  //     if (err) {
  //         console.error(err);
  //         res.end(err);
  //     }
  // });
}
