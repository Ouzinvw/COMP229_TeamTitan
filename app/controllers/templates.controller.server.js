import { UserDisplayName } from "../utils/index.js";

export function DisplayTemplate1Page(req, res, next) {
  res.render("index", {
    title: "Template 1",
    page: "template1",
    displayName: UserDisplayName(req),
    user: req.user
  });
}

export function DisplayTemplate2Page(req, res, next) {
  res.render("index", {
    title: "Template 2",
    page: "template2",
    displayName: UserDisplayName(req),
    user: req.user
  });
}
