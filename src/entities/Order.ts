import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn} from "typeorm";


@Entity("orders") 
class Order {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_client: number;

    @Column()
    order_number: number;

    @Column()
    id_product: number;

    @Column()
    valor_total: number;

    @Column()
    status: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    
}


export { Order };
