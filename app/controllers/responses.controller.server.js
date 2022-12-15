import responseModel from "../models/responses.js";
import surveyModel from "../models/surveys.js";
import { UserDisplayName } from "../utils/index.js";

export function DisplayResponseList(req, res, next) {
  const id = req.params.id;

  surveyModel.findById(id, (err, survey) => {
    if (err) {
      console.error(err);
      res.end(err);
    }

    responseModel.find({ survey: id }, function (err, responseCollection) {
      if (err) {
        console.error("couldn't fetch survey responses", err);
      }

      console.log("response Collelction", responseCollection);
      console.log("questions ", survey.questions);

      res.render("index", {
        title: "Survey responses",
        page: "responses/list",
        survey: survey,
        questions: survey.questions,
        responses: responseCollection,
        displayName: UserDisplayName(req),
        user: req.user,
      });
    });
  });
}

export function ProcessResponseAdd(req, res, next) {
  let newResponse = responseModel({
    survey: req.body.survey,
    user: req.user ? req.user.displayName : "anonymous user",
    responseDate: Date.now(),
    responses: req.body.responses,
  });

  responseModel.create(newResponse, (err, Answer) => {
    if (err) {
      console.error(err);
      res.end(err);
    }

    res.redirect("/survey-list");
  });
}
