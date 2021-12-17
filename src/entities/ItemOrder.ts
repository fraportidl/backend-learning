import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, JoinColumn, ManyToOne} from "typeorm";
import { Order } from "./Order";
import { Products } from "./Products";


@Entity("itemsOrder") 
class ItemsOrder {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    id_product: string;

    @JoinColumn({name: "id_product"})
    @ManyToOne(() => Products)
    product: Products;

    @Column()
    id_order: string;

    @JoinColumn({name: "id_order"})
    order: Order;
    @ManyToOne(() => Order)

    @Column()
    quantity: number;

    @Column()
    price: string;

    @Column()
    unitary_price: number;

    @Column()
    descount: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    
}


export { ItemsOrder };
