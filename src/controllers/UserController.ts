import { Request, Response } from "express";
import { UserService } from "../services/UserService";
import { UsersRepositories } from "../repositories/UserRepositories";
import { getCustomRepository } from "typeorm";

interface IUserRequest {
    id?: string;
 };

function getRepoUsers(){
    const usersRepository = getCustomRepository(UsersRepositories);
    return usersRepository;
}


class UserContoller {
    static async handleInsert(request: Request, response: Response) {
        
        const { id, name, email, admin, password } = request.body; //recebe os campos da requisiçao na rota e passa para o controller enviar para o service
    
        const createUserService = new UserService();
    
        const user = await createUserService.execute({ id, name, email, admin, password });

        return response.json(user);

    }
    

    async handleFind(request: Request, response: Response){
        const { id, name, email, admin, password } = request.body;

    }


    static async findUser(request: Request, response: Response) {
        const usersRepository = getCustomRepository(UsersRepositories);
        const {id} = request.body //recebe os campos da requisiçao na rota e passa para o controller enviar para o service
        
        const userId = await usersRepository.findOne(
            { where:{ id: id }}
          )

            if(typeof userId == undefined){
                return
            }
            let mensagemRetorno = typeof(userId) == "undefined" ? {"success":false, "usuario": "Sem usuario"} : {"success":true, "usuario": userId }
        response.json(mensagemRetorno);

    }


    static async findAllUsers(request: Request, response: Response) {
        const usersRepository = getRepoUsers();

        const arrUser = await usersRepository.find()
        const arrayUsuarios = arrUser;

        response.json(arrayUsuarios);
    }

    // static async handleInsert



}

export { UserContoller };