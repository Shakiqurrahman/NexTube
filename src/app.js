import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";
import { MAX_JSON_SIZE } from "./constants.js";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: MAX_JSON_SIZE}))
app.use(express.urlencoded({extended : true}))
app.use(express.static("public"))
app.use(cookieParser())

export default app;
