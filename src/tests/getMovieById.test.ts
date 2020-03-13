import { MovieGateway } from "../business/gateways/movieGateways";
import { GetMovieByIdUC } from "../business/UseCases/GetMovieById";

const moviesGatewayImplementation: MovieGateway = {
    getMovieById: jest.fn()
  };

describe('Testando filmes', () => {
    test("Deve retornar um erro", async () => {
        moviesGatewayImplementation.getMovieById = 
        jest.fn()
        .mockReturnValueOnce({});
        
        const uc = new GetMovieByIdUC(moviesGatewayImplementation);
        const result = await uc.execute("");

        expect(result).toEqual({});
    })
});