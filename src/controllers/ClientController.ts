import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { ClientService } from "../services/ClientService";
import { Client } from "../entities/Client";


class ClientController {
   static async handle(request: Request, response: Response) {
        
        const { ...nunber_register } = request.body; //recebe os campos da requisiçao na rota e passa para o controller enviar para o service
    
        const createClientService = new ClientService();
    
        const client = await createClientService.execute({ ...nunber_register });

        return response.json(client);
    }

   static  async findClients(request: Request, response: Response) {

        const clientRepository = getRepository(Client);

        const arr = clientRepository.find();
        const clients = arr;

        return response.json(clients);
    }

}

export { ClientController };