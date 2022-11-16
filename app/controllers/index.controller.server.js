// Index controller

import { UserDisplayName } from "../utils/index.js";

export function displayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home', displayName: UserDisplayName(req)});
};

export function DisplaySurveyList(req, res, next) {
    res.render('index', { title: 'Survey', page: 'surveys', displayName: UserDisplayName(req)});
}