import { EntityRepository, Repository } from "typeorm";
import { Vehicle } from "../entities/Vehicle";


@EntityRepository(Vehicle)
class VehicleRepositories extends Repository<Vehicle> {

}

export { VehicleRepositories };

