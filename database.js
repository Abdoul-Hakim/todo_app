
const { MongoClient, ServerApiVersion } = require('mongodb');
const { test } = require('./api');
const uri = "mongodb+srv://thesagedev:Hakim1501$@trainingcluster.hnsyaya.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

/*
Example how to connect to mongodb
client.connect(err => {
  // throw error if something happen
  if (err) {
    throw err;
  }
  const collection = client.db("todo").collection("todolist");
  // perform actions on the collection object
  console.log('connection successfull');

  // fetching data from database
  collection.find().toArray((err, result) => {
    if (err) {
      throw err;
    }
    console.log(result);
  });
});*/

class TodoDB {
  db;
  collection;

  /**
   * init database connection 
   */
  async connect() {
    // init connection to database
    await client.connect();
    this.db = client.db("todo");
    this.collection = this.db.collection("todolist");
    console.log('connection successfull');
  }

  /**
   * get all todos 
   */
  async getTodo(todoID) {
    console.log(todoID)
    try {
      await this.connect();
  
      const todoList = await this.collection.find().toArray();
      return todoList;
    } catch (error){
      console.log('error');
      console.log(error);
    } finally {
      console.log('closing');
      await client.close();
    }
  }

  async createTodo(newTodo) {
    try {
      await this.connect();
      await this.collection.insertOne(newTodo);
    } catch (error){
      console.log('error');
      console.log(error);
    } finally {
      console.log('closing');
      await client.close();
    }
  }
}




module.exports = {
  TodoDB
}
