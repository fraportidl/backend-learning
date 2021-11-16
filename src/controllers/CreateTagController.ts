import { Request, Response } from "express";
import { CreateTagService } from "../services/CreateTagsService";


class CreateTagContoller {
    async handle(request: Request, response: Response) {
        
        const { ...name } = request.body; //recebe os campos da requisiçao na rota e passa para o controller enviar para o service
    
        const createTagService = new CreateTagService();
    
        const tag = await createTagService.execute({ ...name });

        return response.json(tag);
    }
}

export { CreateTagContoller };