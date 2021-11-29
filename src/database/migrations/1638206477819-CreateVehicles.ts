import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateVehicles1638206477819 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "vehicles",
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
                        name: 'plate',
                        type: 'varchar'
                    },
                    {
                        name: 'km_inicial',
                        type: 'float',
                        default: 0
                    },
                    {
                        name: 'km_atual',
                        type: 'float',
                        default: 0
                    },
                    {
                        name: 'brand',
                        type: 'varchar'
                    },
                    {
                        name: 'model',
                        type: 'varchar'
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
        await queryRunner.dropTable("vehicles");
    }

}
