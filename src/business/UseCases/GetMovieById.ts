import { MovieGateway } from "../gateways/movieGateways";
import { Movie } from "../Entities/movie";


export class GetMovieByIdUC {
    constructor(private movieGateway: MovieGateway ) {}
  
    public async execute(id: string): Promise<GetMovieByIdOutput> {
      if (id === "") {
        throw new Error("Invalid id");
      }
  
      const movie = await this.movieGateway.getMovieById(id);
  
      if (!movie) {
        throw new Error("Movie not found");
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