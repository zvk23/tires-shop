const { MongoClient } = require("mongodb");

class Connection {
  constructor() {
    this._url = "mongodb://localhost:27017/shop-tires";
    // this._url =
    //   process.env.BD_CONNECTION_STRING ||
    //   "mongodb+srv://tires-admin:5533e211@tires-dev.b2f4g6x.mongodb.net/";
    this._client = undefined;
  }

  async init() {
    this._client = new MongoClient(this._url);
    await this._client.connect();
  }

  async close() {
    await this._client?.close();
  }

  getCollection(collecitonName) {
    return this._getDb().collection(collecitonName);
  }

  _getDb() {
    return this._client.db();
  }
}

module.exports = new Connection();
