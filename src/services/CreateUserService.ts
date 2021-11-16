import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UserRepositories";

interface IUserRequest {
    id: string;
    name: string;
    email: string;
    admin?: string;
};


class CreateUserService {
    async execute({ id, name, email, admin }: IUserRequest) {
        const usersRepository = getCustomRepository(UsersRepositories);

        if(!email) {
            throw new Error("Email incorreto");
        }

        const usuarioExiste = await usersRepository.findOne({
            email
        });

        if (usuarioExiste) {
            throw new Error("Usuario já existe");
        }

        const user = usersRepository.create({
            id,
            name,
            email,
            admin
        });

        await usersRepository.save(user);

        return user;
    }
}

export { CreateUserService };