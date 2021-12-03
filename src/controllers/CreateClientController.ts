import { Request, Response } from "express";
import { CreateClientService } from "../services/CreateClientService";


class CreateClientContoller {
    async handle(request: Request, response: Response) {
        
        const { ...nunber_register } = request.body; //recebe os campos da requisiçao na rota e passa para o controller enviar para o service
    
        const createClientService = new CreateClientService();
    
        const client = await createClientService.execute({ ...nunber_register });

        return response.json(client);
    }
}

export { CreateClientContoller };