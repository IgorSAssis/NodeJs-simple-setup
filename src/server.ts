import express, { Request, Response } from "express";

import "@controllers/UsersController";

const app = express();

app.use(express.json());

app.get("/", (request: Request, response: Response) => {
    return response.send({ message: "Hello world!!" });
});

app.listen(3333, () => console.log("Listening on port 3333!"));
