import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateEmployee1638208533323 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "employee",
                columns:[
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'name',
                        type: 'varchar'
                    },
                    {
                        name: 'cpf',
                        type: 'varchar'
                    },
                    {
                        name: 'occupation',
                        type: 'varchar'
                    },
                    {
                        name: 'salary',
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
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("employee");
    }

}
