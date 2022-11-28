import { Router } from "express";

import {
  DisplayTemplate1Page,
  DisplayTemplate2Page,
} from "../controllers/templates.controller.server.js";

import { AuthGuard } from "../utils/index.js";

const router = Router();

router.get("/template1", DisplayTemplate1Page);
router.get("/template2", DisplayTemplate2Page);

export default router;
