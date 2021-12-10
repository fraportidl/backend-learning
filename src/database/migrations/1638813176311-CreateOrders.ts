import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateOrders1638813176311 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "orders",
                columns: [
                    {
                        name: 'id',
                        type: 'int',    
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'id_client',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'order_number',
                        type: 'int',
                    },
                    {
                        name: 'id_product',
                        type: 'int'
                    },
                    {
                        name: 'valor_total',
                        type: 'float',
                    },
                    {
                        name: 'status',
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

                ],
                foreignKeys: [
                    {
                        name: "FKClientOrders",
                        referencedTableName: "client",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_client"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )

        // await queryRunner.createForeignKey(
        //     "orders",
        //     new TableForeignKey({
            
        //             name: "FKClientOrders",
        //             referencedTableName: "client",
        //             referencedColumnNames: ["id"],
        //             columnNames: ["id_client"],
        //             onDelete: "SET NULL",
        //             onUpdate: "SET NULL"
               
        //     })
        // )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("orders")
    }

}
