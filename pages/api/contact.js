import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    const newMessage = {
      email,
      name,
      message,
    };
    let client;
    try {
      client = await MongoClient.connect(
        `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.crtnf.mongodb.net/${process.env.mongodb_db_key}?retryWrites=true&w=majority`
      );
    } catch (error) {
      res.status(500).json({ message: "Could Not Connect to DB" });
      return;
    }

    const db = client.db();
    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Could Not Connect to DB" });
      return;
    }
    client.close();
    res.status(201).json({ message: newMessage });
  }
}

export default handler;