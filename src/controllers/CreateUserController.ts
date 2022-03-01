import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";
import { UsersRepositories } from "../repositories/UserRepositories";
import { getCustomRepository } from "typeorm";

class CreateUserContoller {
    async handle(request: Request, response: Response) {
        
        const { id, name, email, admin, password } = request.body; //recebe os campos da requisiçao na rota e passa para o controller enviar para o service
    
        const createUserService = new CreateUserService();
    
        const user = await createUserService.execute({ id, name, email, admin, password });

        return response.json(user);
    }

    async handleFind(request: Request, response: Response){
        const { id, name, email, admin, password } = request.body;
        
        
      
    }
}

export { CreateUserContoller };