import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { AppController } from "./app.controller";
import { bffExpress } from "../core/index";

const app = express();

app.use(
  bffExpress({
    controllers: [AppController],
  })
);

app.listen(process.env.SERVER_PORT, () =>
  console.info(`Server running on port ${process.env.SERVER_PORT}`)
);
