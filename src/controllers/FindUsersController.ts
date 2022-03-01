import { Request, Response } from "express";
import { FindUsersService } from "../services/FindUsersService";


class FindUsersContoller {
    async handle(request: Request, response: Response) {
        
        const {...id} = request.body; //recebe os campos da requisiçao na rota e passa para o controller enviar para o service
    
        const findUsersService = new FindUsersService();
    
        const user = await findUsersService.execute(id);

        return response.json(user);
    }
}


export { FindUsersContoller };