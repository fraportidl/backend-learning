import { EntityRepository, Repository } from "typeorm";
import { ItemsOrder } from "../entities/ItemOrder";

@EntityRepository(ItemsOrder)
class ItemsOrderRepositories extends Repository<ItemsOrder> {


}

export { ItemsOrderRepositories };