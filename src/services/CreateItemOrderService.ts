import { getCustomRepository } from "typeorm";
import { ItemsOrderRepositories } from "../repositories/ItemsOrderRepositories";

interface IItemOrderRequest {
    id: string;
    id_product: string;
    id_order: string;
    quantity_seller: number;
    price_seller: string;
    descount: string

   
};


class CreateItemOrderService {
    async execute({ id, id_product, id_order, 
                    quantity_seller, price_seller, descount }: IItemOrderRequest) {
        const itemsOrderRepositories = getCustomRepository(ItemsOrderRepositories);
        
                if(!id_product || !id_order) {
                    throw new Error("Ocorreu um erro ao informar os itens do pedido! Refaça a operação.");
                }

        
                const itemOrder = itemsOrderRepositories.create({
                    id,
                    id_product,
                    id_order,
                    quantity_seller,
                    price_seller,
                    descount
                    
                });
        
                await itemsOrderRepositories.save(itemOrder);
        
                return;
    }
}

export { CreateItemOrderService };




