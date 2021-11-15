import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UserRepositories";

interface IuserRequest {
    name: string;
    email: string;
    admin?: Int16Array;
};


class CreateUserService {
    async execute({ name, email, admin }: IuserRequest) {
        const usersRepository = getCustomRepository(UsersRepositories);

        console.log("Email", email);

        if(!email) {
            throw new Error("Email incorreto");
        }

        const usuarioExiste = await usersRepository.findOne({
            email,
        });

        if (usuarioExiste) {
            throw new Error("Usuario já existe");
        }

        const user = usersRepository.create({
            name,
            email,
            admin,
        });

        await usersRepository.save(user);

        return user;
    }
}

export { CreateUserService };