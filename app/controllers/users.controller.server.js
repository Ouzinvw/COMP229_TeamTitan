import userModel from "../models/user.js";
// need passport
import passport from "passport";

import { UserDisplayName } from "../utils/index.js";

export function DisplayProfileEditPage(req, res, next) {
  let id;
  if (req.user) {
    id = req.user.id;
  }

  userModel.findById(id, (err, user) => {
    if (err) {
      console.error(err);
      res.end(err);
    }

    res.render("index", {
      title: "Edit Your Profile",
      page: "users/edit",
      user: user,
      displayName: UserDisplayName(req),
    });
  });
}

export function ProcessProfileEditPage(req, res, next) {
  let id;
  if (req.user) {
    id = req.user.id;
  }

  let newUser = userModel({
    _id: req.body.id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    emailAddress: req.body.emailAddress,
    displayName: req.body.firstName + " " + req.body.lastName,
  });

  userModel.updateOne({ _id: id }, newUser, (err, User) => {
    if (err) {
      console.error(err);
      res.end(err);
    }
    // To update password
    userModel
      .findById(id)
      .then((foundUser) => {
        foundUser
          .changePassword(req.body.oldPassword, req.body.newPassword)
          .then(() => {
            console.log("password changed");
            return res.redirect("/survey-list");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  });
}
