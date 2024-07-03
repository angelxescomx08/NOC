import mongoose from "mongoose"
import { MongoDatabase } from "./init"

describe("init mongo",()=>{

  afterAll(()=>{
    mongoose.connection.close()
  })

  test("should init mongo",async ()=>{
    const consoleSpy = jest.spyOn(console,"log")
    const message = "Mongo connected"
    await MongoDatabase.connect({
      dbName: process.env.MONGO_DB_NAME!,
      mongoURL: process.env.MONGO_URL!
    })
    expect(consoleSpy).toHaveBeenCalledWith(message)
  })

  test("should throw an error if connection wrong",async()=>{
    const consoleSpy = jest.spyOn(console,"log")
    const message = "Mongo connection error"
    try{
      await MongoDatabase.connect({
        dbName: "bad-db-name",
        mongoURL: "bad-mongo-url"
      })
      expect(true).toBe(false)
    }catch(e){
      expect(consoleSpy).toHaveBeenCalledWith(message)
    }

  })
})