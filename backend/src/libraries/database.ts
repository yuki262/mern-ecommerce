import { connect } from "mongoose";

const connectDatabase = async () => {
  try {
    const connection = await connect(process.env.MONGO_URI || "");
    console.log(`### MongoDB connected:     ${connection.connection.host}`);
  } catch (error) {
    console.log("### Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export { connectDatabase };
