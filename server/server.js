import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";

import cors from "cors";

//configure env
dotenv.config();

//databse config
connectDB();



//rest object
const app = express();

//middelwares
const corsOption= { 
    origin:"http://localhost:3000",
    optionSuccessStatus: 200,
};

app.use(cors(corsOption));
app.use(express.json());
app.use(morgan("dev"));

//routes

import authRoutes from "./routes/authRoute.js";
import productRoutes from "./routes/productRoute.js";


app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/product", productRoutes);



//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});