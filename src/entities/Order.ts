import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn} from "typeorm";


@Entity("orders") 
class Order {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    id_client: string;

    @Column()
    order_number: number;

    @Column()
    id_product: string;

    @Column()
    valor_total: string;

    @Column()
    status: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    
}


export { Order };
