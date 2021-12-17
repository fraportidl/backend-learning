import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class alterTypePriceProducts1639740663522 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "products",
            new TableColumn({
                name: "unitary_price",
                type: "float",

            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("products", "unitary_price")
    }

}


// ALTER TABLE TABELA ALTER COLLUMN COLUNA FLOAT

