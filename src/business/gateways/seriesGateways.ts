import { Series } from "../Entities/series";

export interface SeriesGateway {
    getSeriesById(id: string): Promise<Series>  
    createSerie(input: CreateSerieInput): Promise<Series> 
}