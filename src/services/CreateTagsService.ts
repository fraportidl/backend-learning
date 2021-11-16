import { getCustomRepository } from "typeorm";
import { TagRepositories } from "../repositories/TagsRepositories";

interface ITagsRequest {
    id: string;
    name: string;
  
};


class CreateTagService {
    async execute({ id, name, }: ITagsRequest) {
        const tagRepositories = getCustomRepository(TagRepositories);

        // if(!id){
        //     throw new Error("Somente usuarios administradores podem cadastrar novas tags")
        // }
        // else if{

        // }
        
                if(!name) {
                    throw new Error("Nao informado um nome para a tag");
                }
        
                const tagExiste = await tagRepositories.findOne({
                    name
                });
        
                if (tagExiste) {
                    throw new Error("Tag já existe");
                }
        
                const tag = tagRepositories.create({
                    id,
                    name
                });
        
                await tagRepositories.save(tag);
        
                return tag;
    }
}

export { CreateTagService };