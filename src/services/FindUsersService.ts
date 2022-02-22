import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UserRepositories";

interface IUserRequest {
   
};


class FindUsersService {
    async execute() {
        const usersRepository = getCustomRepository(UsersRepositories);

       
        const users = await usersRepository.query("SELECT * from users");

        return users;
    }
}




export { FindUsersService };