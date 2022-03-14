import { getCustomRepository, getRepository } from "typeorm";
import { User } from "../entities/User";
import { hash } from "bcryptjs";

interface IUserRequest {
    id: string;
    name: string;
    email: string;
    admin?: string;
    password: string
};


class UserService {
    async execute({ id, name, email, admin, password }: IUserRequest) {
        const usersRepository = getRepository(User)

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

        return;
    }
}




export { UserService };