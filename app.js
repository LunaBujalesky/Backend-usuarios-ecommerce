import express from "express";
import mongoose from "mongoose";
import passport from "passport";
import sessionRoutes from "./routes/sessions.routes.js";

const app = express();

app.use(express.json());
app.use(passport.initialize());

app.use("/api/sessions", sessionRoutes);

mongoose.connect(process.env.MONGO_URL);

app.listen(process.env.PORT);