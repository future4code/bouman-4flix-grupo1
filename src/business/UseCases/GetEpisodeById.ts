import { Episode } from "../Entities/episode";
import { EpisodeGateway } from "../gateways/episodesGateway";

export class GetEpisodeByIdUC {
    constructor(private episodesGateway: EpisodeGateway) {}
  
    public async execute(id: string): Promise<GetEpisodeByIdOutput> {
        
        if (id === "") {
        throw new Error("Invalid id");
      }
  
      
      const episodes = await this.episodesGateway.getEpisodeById(id);
      if (!episodes) {
        throw new Error("Series not found");
      }
  
      return episodes
    }
  }
  
export interface GetEpisodeByIdOutput {
                id: string,
				title: string,
				picture: string,
				synopsis: string,
				length: number,
				link: string,
				seriesTitle: string,
				seriesId: string
}