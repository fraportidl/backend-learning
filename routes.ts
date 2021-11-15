import { Router } from "express"

import { CreateUserContoller } from "./src/controllers/CreateUserController";

const router = Router();
const createUserContoller = new CreateUserContoller;

router.post("/users", createUserContoller.handle)


export { router };