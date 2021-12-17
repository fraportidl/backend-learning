import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn} from "typeorm";


@Entity("products") 
class Products {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    description: string;

    @Column()
    price: string;

    @Column()
    storage_quantity: number;

    @Column()
    product_type: string;

    @Column()
    unitary_price: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    
}


export { Products };
