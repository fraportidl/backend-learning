import { Router } from "express"

import { CreateUserContoller } from "./src/controllers/CreateUserController";
import { CreateTagContoller } from "./src/controllers/CreateTagController";
import { ensureAdmin } from "./src/middlewares/ensureAdmin";

const router = Router();
const createUserContoller = new CreateUserContoller();
const createTagContoller = new CreateTagContoller();

router.use(ensureAdmin);

router.post("/users", createUserContoller.handle);
router.post("/tags", ensureAdmin, createTagContoller.handle);


export { router };