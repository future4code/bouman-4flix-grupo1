import { MovieGateway } from "../gateways/movieGateways";
import { NotFoundError } from "../error/NotFoundError";


export class GetMovieByIdUC {
  constructor(private movieGateway: MovieGateway) { }

  public async execute(id: string): Promise<GetMovieByIdOutput | undefined> {
    if (!id) {
      throw new Error("Invalid id");
    }

    const movie = await this.movieGateway.getMovieById(id);

    if (!movie) {
      throw new NotFoundError("Movie not found");
    }

    return {
      id: movie.getId(),
      title: movie.getTitle(),
      date: movie.getDate(),
      length: movie.getLength(),
      synopsis: movie.getSynopsis(),
      link: movie.getLink(),
      picture: movie.getPicture()
    };
  }
}

export interface GetMovieByIdOutput {
  id: string,
  title: string,
  date: Date,
  length: number,
  synopsis: string,
  link: string,
  picture: string
}