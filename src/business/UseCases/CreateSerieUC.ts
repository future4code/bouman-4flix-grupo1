import { v4 } from "uuid";
import { SeriesGateway } from "../gateways/seriesGateways";
import { Series } from "../Entities/series";

export class CreateSerieUC {
  constructor(private seriesGateways: SeriesGateway ) {}

  public async execute(input: CreateSerieInput): Promise<Series> {
    const id = v4();

    const serie = new Series(
      input.id,
      input.title,
      input.date,
      input.length,
      input.synopsis,
      input.link,
      input.picture
    );

    await this.seriesGateways.createSerie(serie);

    return serie
  }
}

export interface CreateSerieInput {
  id: string;
  title: string;
  date: string;
  length: string;
  synopsis: string;
  link: string;
  picture: string
}

