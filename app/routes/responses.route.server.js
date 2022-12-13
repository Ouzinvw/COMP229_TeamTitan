import { Router } from "express";

import {
    DisplayResponseList,
    ProcessResponseAdd
} from "../controllers/responses.controller.server.js";


const router = Router();

router.get("/responses-list", DisplayResponseList);
router.post("/responses-list", DisplayResponseList);
router.get('/responses-add', ProcessResponseAdd);
router.post('/responses-add', ProcessResponseAdd);

export default router;