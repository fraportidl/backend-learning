import { getCustomRepository, getRepository } from "typeorm";
import { ClientRepositories } from "../repositories/ClientRepositories";
import { Client } from "../entities/Client";

interface IClientRequest {
    id: string;
    razao_social: string;
    nome_fantasia: string;
    type_client: string;
    nunber_register: string;
    responsavel?: string;
    adiantamento_default?: number;
  
};


class ClientService {
    async execute({ id, razao_social, nome_fantasia, 
                    type_client, responsavel, nunber_register, adiantamento_default }: IClientRequest) {
        const clientRepositories = getCustomRepository(ClientRepositories);
        
                if(!nunber_register) {
                    throw new Error("O CPF ou CNPJ é um campo obrigatorio");
                }
        
                
                const clientExist = await clientRepositories.findOne({
                    nunber_register
                });
                
                
                if (clientExist) {
                    throw new Error(`O Cliente já existe`);
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
            
            
            async findOne({ id, razao_social = null, nome_fantasia = null, type_client = null,
                responsavel, nunber_register, adiantamento_default}: IClientRequest){
                    const clientRepositories = getRepository(Client);
                    
                    if(!nunber_register) {
                        throw new Error("O CPF ou CNPJ é um campo obrigatorio");
                    }

                    const clientId = await clientRepositories.findOne(
                        { where:{ nunber_register: nunber_register }}
                    )

                    if(typeof clientId == undefined){
                        return
                    }
                    let mensagemRetorno = typeof(clientId) == "undefined" ? {"success":false, "cliente": "Sem usuario"} : {"success":true, "client": clientId }
                return mensagemRetorno;
            
                }


               





            }
            
            export { ClientService };