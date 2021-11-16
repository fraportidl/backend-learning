import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class tags1637081797401 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tags",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
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
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tags");
    }

}
