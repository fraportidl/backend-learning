import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class alterItensProducts1639765840126 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "itemsOrder",
            new TableColumn({
                name: "unitary_price",
                type: "float",

            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("itemsOrder", "unitary_price")
    }

}
