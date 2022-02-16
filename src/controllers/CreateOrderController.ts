import { Request, Response } from "express";
import { CreateOrderService } from "../services/CreateOrderService";


class CreateOrderContoller {
    async handle(request: Request, response: Response) {
        
        const { ...id_product } = request.body; //recebe os campos da requisiçao na rota e passa para o controller enviar para o service
    
        const createOrderService = new CreateOrderService();
    
        const order = await createOrderService.execute({ ...id_product });

        return response.json(order);
    }
}

export { CreateOrderContoller };