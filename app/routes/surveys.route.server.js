import { Router } from "express";

import {  DisplaySurveyList, 
    DisplaySurveyAddPage, 
    ProcessSurveyAddPage, 
    ProcessSurveyEditPage, 
    DisplaySurveyEditPage, 
    ProcessSurveyDelete } from "../controllers/surveys.controller.server.js";

import { AuthGuard } from "../utils/index.js";

const router = Router();

router.get('/survey-list', DisplaySurveyList);
router.get('/survey-add', AuthGuard, DisplaySurveyAddPage);
router.post('/survey-add', AuthGuard,ProcessSurveyAddPage);
router.post('/survey-edit/:id',ProcessSurveyEditPage);
router.get('/survey-edit/:id',DisplaySurveyEditPage);
router.get('/survey-delete/:id', AuthGuard,ProcessSurveyDelete);

export default router;