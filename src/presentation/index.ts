import express, { Request, Response } from "express";
import { getMovieByIdEndpoint } from './endpoints/getMovieById';
import { getEpisodeByIdEndpoint } from './endpoints/getEpisodeById';

const app = express();
app.use(express.json());

app.get('/movies/:id', getMovieByIdEndpoint);

app.get('/episode/:id', getEpisodeByIdEndpoint);


export default app;
