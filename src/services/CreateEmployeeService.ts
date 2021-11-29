import { getCustomRepository } from "typeorm";
import { EmployeeRepositories } from "../repositories/EmployeeRepositories";

interface IEmployeeRequest {
    id: string;
    name: string;
    cpf: string;
    occupation: string;
    salary?: number;
  
};


class CreateEmployeeService {
    async execute({ id, name, cpf, occupation, salary }: IEmployeeRequest) {
        const employeeRepositories = getCustomRepository(EmployeeRepositories);
        
                if(!cpf) {
                    throw new Error("O CPF é um campo obrigatorio'");
                }
        
                const employeeExist = await employeeRepositories.findOne({
                    cpf
                });
        
                if (employeeExist) {
                    throw new Error("O Funcionario já existe");
                }
        
                const employee = employeeRepositories.create({
                    id,
                    name,
                    cpf,
                    occupation,
                    salary
                });
        
                await employeeRepositories.save(employee);
        
                return employee;
    }
}

export { CreateEmployeeService };