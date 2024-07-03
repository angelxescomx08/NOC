import { envs } from "./envs.plugin";

describe("envs.plugin", () => {
  test("should be equal to expected .envs.plugin", () => {
    expect(envs).toEqual({
      PORT:3000,
      MAILER_SERVICE:"gmail",
      MAILER_EMAIL:"angelitox105@gmail.com",
      MAILER_SECRET_KEY:"gtlj vocz pkdh zsgg",
      PROD:true,
      MONGO_URL:"mongodb://angel:123456@localhost:27017",
      MONGO_DB_NAME:"NOC-TEST",
      MONGO_USER:"angel",
      MONGO_PASS:"123456",
    })

  });
});