import { EntityRepository, Repository } from "typeorm";
import { Products } from "../entities/Products";

@EntityRepository(Products)
class ProductRepositories extends Repository<Products> {


}

export { ProductRepositories };
