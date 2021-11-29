import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn} from "typeorm";


@Entity("vehicles") 
class Vehicle {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    plate: string;

    @Column()
    km_inicial: number;

    @Column()
    km_atual: number;

    @Column()
    brand: string;

    @Column()
    model: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    
}


export { Vehicle };



