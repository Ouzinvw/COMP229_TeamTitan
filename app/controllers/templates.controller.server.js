import { UserDisplayName } from "../utils/index.js";

export function DisplayTemplate1Page(req, res, next) {
  res.render("index", {
    title: "MCQ survey template",
    page: "template1",
    displayName: UserDisplayName(req),
    user: req.user
  });
}

export function DisplayTemplate2Page(req, res, next) {
  res.render("index", {
    title: "Short answer survey template",
    page: "template2",
    displayName: UserDisplayName(req),
    user: req.user
  });
}
