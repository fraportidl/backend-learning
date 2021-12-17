import { getCustomRepository } from "typeorm";
import { ItemsOrderRepositories } from "../repositories/ItemsOrderRepositories";
import { ProductRepositories } from "../repositories/ProductRepositories";

interface IItemOrderRequest {
    id: string;
    id_product: string;
    id_order: string;
    quantity: number;
    price: string;
    descount: string;
    unitary_price: number;

   
};


class CreateItemOrderService {
    async execute({ id, id_product, id_order, 
                    quantity, price, descount, unitary_price }: IItemOrderRequest) {
        const itemsOrderRepositories = getCustomRepository(ItemsOrderRepositories);
        const productsRepositories = getCustomRepository(ProductRepositories);

        // const produtoExiste = await productsRepositories.findOne(id_product);


        // if(id_order === id_product) {
        //     throw new Error("Nao é permitido cadastrar um produto igual uma ordem")
        // }

        // if(!produtoExiste) {
        //     throw new Error("Produto nao existe cadastrado");
        // }

        
        
                if(!id_product || !id_order) {
                    throw new Error("Ocorreu um erro ao informar os itens do pedido! Refaça a operação.");
                }

        
                const itemOrder = itemsOrderRepositories.create({
                    id,
                    id_product,
                    id_order,
                    quantity,
                    price,
                    descount,
                    unitary_price  
                });
        
                await itemsOrderRepositories.save(itemOrder);
        
                return itemOrder;
    }
}

export { CreateItemOrderService };




