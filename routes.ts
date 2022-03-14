import { Router } from "express"

import { UserContoller } from "./src/controllers/UserController";
import { CreateTagContoller } from "./src/controllers/CreateTagController";
import { ClientController } from "./src/controllers/ClientController";
import { ensureAdmin } from "./src/middlewares/ensureAdmin";
import { CreateVehicleContoller } from "./src/controllers/CreateVehicleController";
import { CreateEmployeeContoller } from "./src/controllers/CreateEmployeeController";
import { AuthenticateUserController } from "./src/controllers/AuthenticateUserController";
import { CreateItemOrderContoller } from "./src/controllers/CreateItemOrderController";
import { CreateProductContoller } from "./src/controllers/CreateProductController";
import { CreateOrderContoller } from "./src/controllers/CreateOrderController";
import { Client } from "./src/entities/Client";


const router = Router();
//const userContoller = new UserContoller();
const createTagContoller = new CreateTagContoller();
const clientController = new ClientController();
const createVehicleContoller = new CreateVehicleContoller();
const createEmployeeContoller = new CreateEmployeeContoller();
const authenticateUserController = new AuthenticateUserController();
const createItemOrderContoller = new CreateItemOrderContoller();
const createProductContoller = new CreateProductContoller();
const createOrderContoller = new CreateOrderContoller();

router.use(ensureAdmin);

//Authenticate
router.post("/login", authenticateUserController.handle);

//Tags
router.post("/tags", ensureAdmin, createTagContoller.handle);
//Clients
router.post("/clients", ClientController.handle);
router.get("/clientsAll", ClientController.findClients);
//Vehicles
router.post("/vehicles", createVehicleContoller.handle);
//Employees
router.post("/employees", createEmployeeContoller.handle);
//Products
router.post("/products", createProductContoller.handle);
//Orders
router.post("/orders", createOrderContoller.handle);
//Users
router.post("/users", UserContoller.handleInsert);
router.get("/users", UserContoller.findUser);
router.get("/usersAll", UserContoller.findAllUsers);


//Rotas para excluir
router.post("/ItemOrder", createItemOrderContoller.handle);



export { router };