import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongoDB/connect.js";
import postRoutes from "./routes/postsRoutes.js";
import mainRoutes from "./routes/mainRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/posts", postRoutes);
app.use("/api/v1/main", mainRoutes);

const PORT = process.env.PORT || 5001;
const startServer = async () => {
  try {
    connectDB(process.env.MONGO_URL);
    app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
  } catch (e) {
    console.log(err);
  }
};

startServer();
