import { Request, Response } from "express";
import { GetMovieByIdUC } from "../../business/UseCases/GetMovieById";
import { MovieDB } from '../../data/movieDataBase';

export const getMovieByIdEndpoint = async (req: Request, res: Response) => {

    try {
        const getMovieByIdUC = new GetMovieByIdUC(new MovieDB())

        const result = await getMovieByIdUC.execute(req.params.id)

        res.status(200).send(result)
    } catch (err) {
        res.status(400).send(err)
    }

}