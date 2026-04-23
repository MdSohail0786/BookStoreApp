import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

app.use(cors());

app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const mongoDBURI = process.env.MongoDBURI;

// connect to monoDB

try {
  mongoose.connect(mongoDBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to mongoDB");
} catch (error) {
  console.log("error", error);
}

// defining routes

app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
