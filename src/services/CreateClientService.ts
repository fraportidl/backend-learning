import { getCustomRepository } from "typeorm";
import { ClientRepositories } from "../repositories/ClientRepositories";

interface IClientRequest {
    id: string;
    razao_social: string;
    nome_fantasia: string;
    type_client: string;
    nunber_register: string;
    responsavel?: string;
    adiantamento_default?: number;
  
};


class CreateClientService {
    async execute({ id, razao_social, nome_fantasia, 
                    type_client, responsavel, nunber_register, adiantamento_default }: IClientRequest) {
        const clientRepositories = getCustomRepository(ClientRepositories);
        
                if(!nunber_register) {
                    throw new Error("O CPF ou CNPJ é um campo obrigatorio'");
                }
        
                const clientExist = await clientRepositories.findOne({
                    nunber_register
                });
        
                if (clientExist) {
                    throw new Error(`O Cliente  já existe`);
                }
        
                const client = clientRepositories.create({
                    id,
                    razao_social,
                    nome_fantasia,
                    type_client,
                    nunber_register,
                    responsavel,
                    adiantamento_default
                    
                });
        
                await clientRepositories.save(client);
        
                return client;
    }
}

export { CreateClientService };