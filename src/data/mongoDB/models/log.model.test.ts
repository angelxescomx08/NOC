import mongoose from "mongoose";
import { MongoDatabase } from "../init";
import { LogModel } from "./log.model";

describe('log.model', () => {

  beforeAll(async ()=>{
    await MongoDatabase.connect({
      dbName: process.env.MONGO_DB_NAME!,
      mongoURL: process.env.MONGO_URL!
    })
  })

  afterAll(async ()=>{
    await mongoose.connection.close()
  })

  test("Should create a log model", async () => {
    const log = {
      origin: "log.model.test.ts",
      message: "test for logModel",
      level: "low"
    }
    const createdLog = await LogModel.create(log)

    expect(createdLog).toEqual(expect.objectContaining({
      ...log,
      createdAt: expect.any(Date),
      id: expect.any(String)
    }))
  });

  test("Should be right schema",()=>{
    const schema = LogModel.schema.obj;
    expect(schema).toEqual(expect.objectContaining({
      message: { type: expect.any(Function), required: true },
      origin: { type: expect.any(Function) },
      level: {
        type: expect.any(Function),
        enum: [ 'low', 'medium', 'high' ],
        default: 'low'
      },
      createdAt: { type: expect.any(Function), default: expect.any(Date) }
    }))
  })


});