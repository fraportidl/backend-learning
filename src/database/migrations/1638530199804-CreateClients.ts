import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateClients1638530199804 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        new Table({
            name: "clients",
            columns:[
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'razao_social',
                    type: 'varchar'
                },
                {
                    name: 'nome_fantasia',
                    type: 'varchar'
                },
                {
                    name: 'responsavel',
                    type: 'varchar'
                },
                {
                    name: 'nunber_register',
                    type: 'varchar'
                },
                {
                    name: 'type_client',
                    type: 'varchar'
                },
                {
                    name: 'adiantamento_default',
                    type: 'float'
                },
                {
                    name: 'created_at',
                    type: 'datetimeoffset',
                    default: 'SYSDATETIMEOFFSET()'
                },
                {
                    name: 'updated_at',
                    type: 'datetimeoffset',
                    default: 'SYSDATETIMEOFFSET()'
                }
            ]
        })
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("clients")
    }

}
