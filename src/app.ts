import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes";
import morgan from "morgan";
import db from "./config/mongo";
import mongoose from "mongoose";

mongoose.set("strictQuery", true);

const PORT = process.env.PORT || 8081;
const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use(cors());
app.use(router);
db().then(() => console.log("🟢 Base de datos"));

app.listen(PORT, () => console.log(`🚀Servidor ${PORT}`));
