import { Router } from "express"

import { CreateUserContoller } from "./src/controllers/CreateUserController";
import { CreateTagContoller } from "./src/controllers/CreateTagController";
import { CreateClientContoller } from "./src/controllers/CreateClientController";
import { ensureAdmin } from "./src/middlewares/ensureAdmin";
import { CreateVehicleContoller } from "./src/controllers/CreateVehicleController";
import { CreateEmployeeContoller } from "./src/controllers/CreateEmployeeController";
import { AuthenticateUserController } from "./src/controllers/AuthenticateUserController";
import { CreateItemOrderContoller } from "./src/controllers/CreateItemOrderController";
import { CreateProductContoller } from "./src/controllers/CreateProductController";
import { CreateOrderContoller } from "./src/controllers/CreateOrderController";
import { FindUsersContoller } from "./src/controllers/FindUsersController";


const router = Router();
const createUserContoller = new CreateUserContoller();
const createTagContoller = new CreateTagContoller();
const createClientContoller = new CreateClientContoller();
const createVehicleContoller = new CreateVehicleContoller();
const createEmployeeContoller = new CreateEmployeeContoller();
const authenticateUserController = new AuthenticateUserController();
const createItemOrderContoller = new CreateItemOrderContoller();
const createProductContoller = new CreateProductContoller();
const createOrderContoller = new CreateOrderContoller();
const findUsersController = new FindUsersContoller();

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
//Products
router.post("/products", createProductContoller.handle);
//Orders
router.post("/orders", createOrderContoller.handle);
//Users
router.get("/users", findUsersController.handle);


//Rotas para excluir
router.post("/ItemOrder", createItemOrderContoller.handle);



export { router };