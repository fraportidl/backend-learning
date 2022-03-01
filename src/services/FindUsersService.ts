import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UserRepositories";

interface IUserRequest {
   id?: string;
};


class FindUsersService {
    async execute({id} : IUserRequest) {
        const usersRepository = getCustomRepository(UsersRepositories);

        const userId = await usersRepository.findOne({
          id
        })

        // return userId;

        if (userId) {
          const userLocalizado = await usersRepository.query(`SELECT * from users WHERE id = ${userId.id}`);
            console.log(userLocalizado);


          // if(!userId.id == userLocalizado) {
          //   console.log('entrou aqui')
          //   // throw new Error(`Nao existe usuario com esse ID`);
          // }
          return userLocalizado;
      } 

          const users = await usersRepository.query("SELECT * from users");
          return users;

      
    }
}




export { FindUsersService };