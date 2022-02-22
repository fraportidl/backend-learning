import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UserRepositories";
import { hash } from "bcryptjs";

interface IUserRequest {
    id: string;
    name: string;
    email: string;
    admin?: string;
    password: string
};


class CreateUserService {
    async execute({ id, name, email, admin, password }: IUserRequest) {
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

        const passwordHash = await hash(password, 8);

        const user = usersRepository.create({
            id,
            name,
            email,
            admin,
            password: passwordHash,
        });

        await usersRepository.save(user);

        return user;
    }
}




export { CreateUserService };