import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectToMongo = async () => {
  const res = await mongoose.connect(process.env.mongo_uri);
  if (res) {
    console.log("Connected Succesffuly");
  }
};

export default connectToMongo;
