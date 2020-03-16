import { Request, Response } from "express"
import { NotFoundError } from "../../business/error/NotFoundError"
import { GetEpisodeByIdUC } from "../../business/UseCases/GetEpisodeById"
import { EpisodeDB } from '../../data/episodeDataBase';

export const getEpisodeByIdEndpoint  = async (req: Request, res: Response) => {

    try{
        const getEpisodeByIdUC = new GetEpisodeByIdUC ( new EpisodeDB());
        
        const result = await getEpisodeByIdUC.execute(req.params.id)
        res.status(200).send(result)
        
    }catch (err) {
        res.status(400).send(err.message)
    }
}

