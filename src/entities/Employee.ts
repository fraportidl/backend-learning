import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn} from "typeorm";


@Entity("employee") 
class Employee {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    cpf: string;

    @Column()
    occupation: string;

    @Column()
    salary: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    
}


export { Employee };
