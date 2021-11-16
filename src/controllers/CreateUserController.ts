import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";


class CreateUserContoller {
    async handle(request: Request, response: Response) {
        
        const { id, name, email, admin } = request.body; //recebe os campos da requisiçao na rota e passa para o controller enviar para o service
    
        const createUserService = new CreateUserService();
    
        const user = await createUserService.execute({ id, name, email, admin });

        return response.json(user);
    }
}

export { CreateUserContoller };