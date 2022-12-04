import { Router } from "express";
import { DisplayProfileEditPage, 
    ProcessProfileEditPage } from "../controllers/users.controller.server.js";

import { AuthGuard } from "../utils/index.js";

const router = Router();

router.get('/user-edit/:id', AuthGuard, DisplayProfileEditPage);
router.post('/user-edit/:id', AuthGuard, ProcessProfileEditPage);

export default router;