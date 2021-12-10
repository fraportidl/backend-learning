import { Router } from "express"

import { CreateUserContoller } from "./src/controllers/CreateUserController";
import { CreateTagContoller } from "./src/controllers/CreateTagController";
import { CreateClientContoller } from "./src/controllers/CreateClientController";
import { ensureAdmin } from "./src/middlewares/ensureAdmin";
import { CreateVehicleContoller } from "./src/controllers/CreateVehicleController";
import { CreateEmployeeContoller } from "./src/controllers/CreateEmployeeController";
import { AuthenticateUserController } from "./src/controllers/AuthenticateUserController";

const router = Router();
const createUserContoller = new CreateUserContoller();
const createTagContoller = new CreateTagContoller();
const createClientContoller = new CreateClientContoller();
const createVehicleContoller = new CreateVehicleContoller();
const createEmployeeContoller = new CreateEmployeeContoller();
const authenticateUserController = new AuthenticateUserController();

router.use(ensureAdmin);

//Authenticate
router.post("/login", authenticateUserController.handle);

//Users
router.post("/users", createUserContoller.handle);
//Tags
router.post("/tags", ensureAdmin, createTagContoller.handle);
//Clients
router.post("/clients", createClientContoller.handle);
//Vehicles
router.post("/vehicles", createVehicleContoller.handle);
//Employees
router.post("/employees", createEmployeeContoller.handle);



export { router };