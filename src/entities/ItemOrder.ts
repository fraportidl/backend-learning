import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn} from "typeorm";


@Entity("itemsOrder") 
class ItemsOrder {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    id_product: string;

    @Column()
    id_order: string;

    @Column()
    quantity: number;

    @Column()
    price: string;

    @Column()
    descount: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    
}


export { ItemsOrder };
