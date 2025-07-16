import dotenv from "dotenv";
import { app } from "./app";
import { connectDatabase } from "./libraries/database";

dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`### Server is running on:  http://localhost:${PORT}`);

  connectDatabase();
});
