import { Router } from "express";

import {
  DisplayTemplate1Page,
  DisplayTemplate2Page,
} from "../controllers/templates.controller.server.js";
import { ProcessSurveyAddPage } from "../controllers/surveys.controller.server.js";

import { AuthGuard } from "../utils/index.js";

const router = Router();

router.get("/template1", AuthGuard, DisplayTemplate1Page);
router.get("/template2", AuthGuard, DisplayTemplate2Page);
router.post("/template1", AuthGuard, ProcessSurveyAddPage);
router.post("/template2", AuthGuard, ProcessSurveyAddPage);

export default router;
