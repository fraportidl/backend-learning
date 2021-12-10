import { getCustomRepository } from "typeorm";
import { ProductRepositories } from "../repositories/ProductRepositories";

interface IProductRequest {
    id: string;
    description: string;
    price: string;
    storage_quantity: number;
    product_type: string;

  
};


class CreateProductService {
    async execute({ id, description, price, 
                    storage_quantity, product_type }: IProductRequest) {
        const productRepositories = getCustomRepository(ProductRepositories);
        
                if(!description || !price || !product_type) {
                    throw new Error("Existem dados obrigatorios nao informados, revise o cadastro");
                }

        
                const product = productRepositories.create({
                    id,
                    description,
                    price,
                    storage_quantity,
                    product_type
                    
                });
        
                await productRepositories.save(product);
        
                return product;
    }
}

export { CreateProductService };