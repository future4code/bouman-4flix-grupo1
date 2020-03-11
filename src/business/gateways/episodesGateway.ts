import { Episode } from "../Entities/episode";
import { GetEpisodeByIdOutput} from "../UseCases/GetEpisodeById"

export interface EpisodeGateway {
    getEpisodeById(id: string): Promise<GetEpisodeByIdOutput>   
}