import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateItemsOrder1639156672612 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "itemsOrder",
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment' 
                    },
                    {
                        name: 'quantity',
                        type: 'float'
                    },
                    {
                        name: 'price',
                        type: 'varchar',
                    },
                    {
                        name: 'descount',
                        type: 'varchar'
                    },
                    {
                        name: 'id_product',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'id_order',
                        type: 'int',
                        isNullable: true 
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
                ],

                foreignKeys: [
                    {
                        name: 'FKProduct',
                        referencedTableName: 'products',
                        referencedColumnNames: ['id'],
                        columnNames: ['id_product'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL'
                    },
                    {
                        name: 'FKOrder',
                        referencedTableName: 'order',
                        referencedColumnNames: ['id'],
                        columnNames: ['id_order'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("itemsOrder")
    }

}
