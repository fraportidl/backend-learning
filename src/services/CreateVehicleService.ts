import { getCustomRepository } from "typeorm";
import { VehicleRepositories } from "../repositories/VehiclesRepositories";

interface IVehicleRequest {
    id: string;
    name: string;
    plate: string;
    km_inicial: number;
    km_atual: number;
    brand: string;
    model: string;
};


class CreateVehicleService {
    async execute({ id, name, plate, km_inicial, km_atual, brand, model }: IVehicleRequest) {
        const vechiclesRepository = getCustomRepository(VehicleRepositories);

        if(!plate) {
            throw new Error("Placa do veiculo invalida");
        }

        const veiculoExiste = await vechiclesRepository.findOne({
            plate
        });

        if (veiculoExiste) {
            throw new Error("Veiculo já está cadastrado");
        }


        const vechicle = vechiclesRepository.create({
            id,
            name,
            plate,
            km_inicial,
            km_atual,
            brand,
            model,
        });

        await vechiclesRepository.save(vechicle);

        return vechicle;
    }
}

export { CreateVehicleService };