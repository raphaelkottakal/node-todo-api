const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Could not connect', error);
  }
  console.log('Connected to mongodb');
  const db = client.db('ToDoApp');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5bbdccdc2af7ca653fde7ffc')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, err => {
  //   console.log('Unable to fetch data', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log('Todos count:');
  //   console.log(count);
  // }, err => {
  //   console.log('Unable to fetch data', err);
  // });

  db.collection('Users').find({
    name: 'Rapahel'
  }).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, err => {
    console.log('Unable to fetch data', err);
  });

  // client.close();
});