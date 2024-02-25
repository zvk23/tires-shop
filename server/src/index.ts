require("dotenv").config();
const app = require("./server");

(async () => {
  app.listen(process.env.PORT ?? 3000, () =>
    console.log("listening port 3000...")
  );
})();
