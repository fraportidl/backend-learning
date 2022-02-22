import { EntityRepository, Repository } from "typeorm";
import { ClientLocalweb } from "../entities/ClienteLocalweb";

@EntityRepository(ClientLocalweb)
class ClientLocalwebRepositories extends Repository<ClientLocalweb> {


}

export { ClientLocalwebRepositories };