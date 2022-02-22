import { Request, Response } from "express";
import { FindClientes } from "../services/FindClients";


class CreateClientContoller {
    async handle(request: Request, response: Response) {
        
        const { ...nunber_register } = request.body; //recebe os campos da requisiçao na rota e passa para o controller enviar para o service
    
        const createClientLocalwebService = new FindClientes();
    
        const client = await createClientLocalwebService.execute({ ...nunber_register });

        return response.json(client);
    }
}

export { CreateClientContoller };