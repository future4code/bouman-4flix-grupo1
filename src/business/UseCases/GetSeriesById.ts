import { SeriesGateway } from "../gateways/seriesGateways";
import { Series } from "../Entities/series";

export class GetSeriesByIdUC {
    constructor(private seriesGateways: SeriesGateway ) {}
  
    public async execute(id: string): Promise<Series> {
        
        if (id === "") {
        throw new Error("Invalid id");
      }
  
      
      const series = await this.seriesGateways.getSeriesById(id);
      if (!series) {
        throw new Error("Series not found");
      }
  
      return series
    }
  }
  
