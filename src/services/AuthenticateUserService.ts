import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UserRepositories";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {

    async execute({ email, password}: IAuthenticateRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories);
        
        
        // Verificar se existe email
        const user = await usersRepositories.findOne({
            email
        });

        if(!user) {
            throw new Error("Email/Password incorreto")
        }

        const passwordMath = await compare(password, user.password)

            if(!passwordMath) {
                throw new Error("Email/Password incorreto")
            }
            // Gerar token

            const idConverted = user.id.toString();

            const token = sign({
                email: user.email
            }, "23d329964a71bca678d3ab116ed6679a", {
                subject : idConverted,
                expiresIn: "1d",
            } 
        );

        return token;  

    }
}

export { AuthenticateUserService };