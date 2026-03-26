import express from "express";
import mongoose from "mongoose";
import passport from "./config/passport.js";
import sessionRoutes from "./routes/sessions.routes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(passport.initialize());

app.use("/api/sessions", sessionRoutes);

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Mongo conectado"));

app.listen(process.env.PORT, () => {   console.log("Server OK");
});