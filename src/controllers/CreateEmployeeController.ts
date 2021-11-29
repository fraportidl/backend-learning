import { Request, Response } from "express";
import { CreateEmployeeService } from "../services/CreateEmployeeService";


class CreateEmployeeContoller {
    async handle(request: Request, response: Response) {
        
        const { ...cpf } = request.body; //recebe os campos da requisiçao na rota e passa para o controller enviar para o service
    
        const createEmployeeService = new CreateEmployeeService();
    
        const employee = await createEmployeeService.execute({ ...cpf });

        return response.json(employee);
    }
}

export { CreateEmployeeContoller };