import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn} from "typeorm";


@Entity("clientLocalWeb") 
class ClientLocalweb {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    razao_social: string;

    @Column()
    nome_fantasia: string;

    @Column()
    type_ClientLocalweb: string;

    @Column()
    responsavel: string;

    @Column()
    nunber_register: string;

    @Column()
    adiantamento_default: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    
}


export { ClientLocalweb };
