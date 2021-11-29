import { Request, Response } from "express";
import { CreateVehicleService } from "../services/CreateVehicleService";


class CreateVehicleContoller {
    async handle(request: Request, response: Response) {
        
        const { id, name, plate, km_inicial, km_atual, brand, model } = request.body; //recebe os campos da requisiçao na rota e passa para o controller enviar para o service
    
        const createVehicleService = new CreateVehicleService();
    
        const vehicle = await createVehicleService.execute({ id, name, plate, km_inicial, km_atual, brand, model });

        return response.json(vehicle);
    }
}

export { CreateVehicleContoller };