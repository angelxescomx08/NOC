import "dotenv/config";
import { Server } from "./presentation/server";
import { envs } from "./config/plugins/envs.plugin";
import { LogModel, MongoDatabase } from "./data/mongoDB";

(async () => {
  main();
})();

async function main() {
  await MongoDatabase.connect({
    dbName: envs.MONGO_DB_NAME,
    mongoURL: envs.MONGO_URL,
  });

  const newLog = await LogModel.create({
    message: "Test message desde mongo",
    origin: "App.ts",
  });

  await newLog.save();
  Server.start();
}
