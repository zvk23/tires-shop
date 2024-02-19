require("dotenv").config();
const app = require("./server");
const Connection = require("./model/db");

(async () => {
  await Connection.init();

  const cols = await Connection._getDb()
    .collection("tires")
    .findOne({ price: 1600 });

  console.log("cols", cols);

  app.listen(process.env.PORT || 3000, () =>
    console.log("listening port 3000...")
  );
})();
