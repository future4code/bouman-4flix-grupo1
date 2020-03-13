import { MovieGateway } from "../src/business/gateways/movieGateways";
import { GetMovieByIdUC } from "../src/business/UseCases/GetMovieById";

const moviesGatewayImplementation: MovieGateway = {
    getMovieById: jest.fn()
};

describe('Testando filmes', () => {
    test("Deve retornar um erro", async () => {
        moviesGatewayImplementation.getMovieById =
            jest.fn()

        const uc = new GetMovieByIdUC(moviesGatewayImplementation);
        const result = await uc.execute(" ");

        expect(moviesGatewayImplementation.getMovieById).toHaveBeenCalled();
    })
});