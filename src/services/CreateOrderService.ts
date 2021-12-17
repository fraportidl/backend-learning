import { getCustomRepository } from "typeorm";
import { OrderRepositories } from "../repositories/OrderRepositories";


interface IOrderRequest {
    id: number;
    id_client: number;
    id_product: number;
    order_number: number;
    valor_total: number;
    status: string

   
};


class CreateOrderService {
    async execute({ id, id_client, id_product, 
                    order_number, valor_total, status }: IOrderRequest) {
        const orderRepositories = getCustomRepository(OrderRepositories);
        
        
        
                if(!id_client || !order_number) {
                    throw new Error("Ocorreu um erro ao cadastrar o pedido! Refaça a operação.");
                }

        
                const Order = orderRepositories.create({
                    id,
                    id_client,
                    id_product, 
                    order_number,
                    valor_total,
                    status
                });
        
                await orderRepositories.save(Order);
        
                return Order;
    }
}

export { CreateOrderService };




