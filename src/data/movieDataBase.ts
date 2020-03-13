import { MainDB } from './mainDataBase'
import { MovieGateway } from '../business/gateways/movieGateways'
import { Movie } from '../business/Entities/movie'

export class MovieDB extends MainDB implements MovieGateway {

    private movieTableName = "Movies"

    public getMovieById = async (id: string): Promise<Movie | undefined> => {

        const queryResult = await this.connection.raw(
            `SELECT * FROM ${this.movieTableName} WHERE id = "${id}"`
        )

        const movie = queryResult[0][0]

        if (movie) {
            return new Movie(
                movie.id,
                movie.title,
                movie.synopsys,
                movie.date,
                movie.length,
                movie.link,
                movie.picture
            )
        } else {
            return undefined
        }


    }
































}