import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProducts1638811524686 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
                name: "products",
                columns:[
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'description',
                        type: 'varchar'
                    },
                    {
                        name: 'price',
                        type: 'float'
                    },
                    {
                        name: 'storage_quantity',
                        type: 'numeric'
                    },
                    {
                        name: 'product_type',
                        type: 'int'
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
        await queryRunner.dropTable("products")
    }

}
