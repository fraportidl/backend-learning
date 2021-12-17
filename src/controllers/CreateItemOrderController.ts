import { Request, Response } from "express";
import { CreateItemOrderService } from "../services/CreateItemOrderService";


class CreateItemOrderContoller {
    async handle(request: Request, response: Response) {
        
        const { ...id_product } = request.body; //recebe os campos da requisiçao na rota e passa para o controller enviar para o service
    
        const createItemOrderService = new CreateItemOrderService();
    
        const itemOder = await createItemOrderService.execute({ ...id_product });

        return response.json(itemOder);
    }
}

export { CreateItemOrderContoller };