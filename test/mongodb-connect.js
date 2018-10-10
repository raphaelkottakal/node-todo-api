const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Could not connect', error);
  }
  console.log('Connected to mongodb');
  const db = client.db('ToDoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Eat lunch',
  //   completed: false
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('Could not insert Todo', error);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name: 'George',
    age: 29,
    location: 'India'
  }, (error, result) => {
    if (error) {
      return console.log('Could not insert Todo', error);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  } );

  client.close();
});