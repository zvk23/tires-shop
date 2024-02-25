require("dotenv").config();
const app = require("./server");
import mongoose from 'mongoose';

(async () => {
  try {
    const connect = await mongoose.connect(process.env.BD_CONNECTION_STRING ?? '')
  } catch (error) {
    console.error(error);
  }
  app.listen(process.env.PORT ?? 3000, () =>
    console.log("listening port 3000...")
  );
})();
