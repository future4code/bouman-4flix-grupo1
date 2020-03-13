import { Movie } from "../Entities/movie";

export interface MovieGateway {
    getMovieById(id: string): Promise<Movie | undefined>
}