import express, { Request, Response } from "express";
import { getMovieByIdEndpoint } from './endpoints/getMovieById'

const app = express();
app.use(express.json());

app.get('/movies/:id', getMovieByIdEndpoint)

export default app;
