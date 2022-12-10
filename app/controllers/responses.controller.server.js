import responseModel from "../models/responses.js";

export function DisplayResponseList(req, res, next) {
    res.render("index", {
      title: "Survey responses",
      page: "responses/list",
      responses: responseCollection,
      displayName: UserDisplayName(req),
      user: req.user,
    });
  }
  
  export function ProcessResponseAdd(req, res, next) {
    let newResponse = responseModel({
      responseDate: Date.now(),
      responses: req.body.responses
    });
  
    
  
    responseModel.create(newResponse, (err, Answer) => {
      if (err) {
        console.error(err);
        res.end(err);
      }
  
      res.redirect("/survey-list");
    });
  }