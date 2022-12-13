import { Router } from "express";

import {  DisplaySurveyList, 
    DisplaySurveyAddPage, 
    ProcessSurveyAddPage, 
    ProcessSurveyResponsePage, 
    DisplaySurveyResponsePage, 
    ProcessSurveyDelete, 
    ProcessSurveyLifetime} from "../controllers/surveys.controller.server.js";

import { AuthGuard } from "../utils/index.js";

const router = Router();

router.get('/survey-list', DisplaySurveyList);
router.get('/survey-add', AuthGuard,DisplaySurveyAddPage);
router.post('/survey-add', AuthGuard,ProcessSurveyAddPage);

router.post('/survey-respond/:id', ProcessSurveyResponsePage);
router.get('/survey-respond/:id', DisplaySurveyResponsePage);

router.get('/survey-delete/:id', AuthGuard,ProcessSurveyDelete);
router.get('/survey-list/:id', AuthGuard,ProcessSurveyLifetime);

export default router;