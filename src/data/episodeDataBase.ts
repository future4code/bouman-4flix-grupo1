import { MainDB } from "./mainDataBase";
import { EpisodeGateway } from "../business/gateways/episodesGateway";
import GetEpisodeByIdOutput from '../business/UseCases/GetEpisodeById'
import { NotFoundError } from "../business/error/NotFoundError";


export class EpisodeDB extends MainDB implements EpisodeGateway {
    private episodeTableName = "Episodes";
    private seriesTableName = "Series"

    public getEpisodeById = async (id: string): Promise<GetEpisodeByIdOutput | undefined> => {

        const queryResult = await this.connection.raw(
            `select * from Episodes
            join Series on series_id = Series.id
            where Episodes.id = '${id}';`
        )

        const episode = queryResult[0][0]

        if (!episode) {
            throw new NotFoundError("Episode not found")
        } else {
            return {
                id: episode.id,
                seriesTitle: episode.title,
                seriesId: episode.series_id,
                title: episode.title,
                synopsis: episode.synopsis,
                picture: episode.picture,
                length: episode.length,
                link: episode.link
            }
        }
    }
}
