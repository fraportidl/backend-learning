import { Request, Response } from "express";
import { CreateProductService } from "../services/CreateProductService";


class CreateProductContoller {
    async handle(request: Request, response: Response) {
        
        const { ...id } = request.body; //recebe os campos da requisiçao na rota e passa para o controller enviar para o service
    
        const createProductService = new CreateProductService();
    
        const client = await createProductService.execute({ ...id });

        return response.json(client);
    }
}

export { CreateProductContoller };